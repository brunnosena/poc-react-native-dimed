import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {KeyboardAvoidingView, ScrollView, Platform, Text} from 'react-native';
import api from '../../services/api';

import {
  Container,
  Title,
  Content,
  MessageError,
  Button,
  ButtonText,
  RepositoriesContainer,
  RepositoriesAvatar,
  RepositoriesName,
} from './styles';
import Input from '../../components/Input';

export interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface objError {
  message: string;
  isError: boolean;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [inputError, setInputError] = useState<objError>({
    message: '',
    isError: false,
  });

  useEffect(() => {
    async function loadRepositories(): Promise<void> {
      const storageRepositories = await AsyncStorage.getItem(
        '@GitHubExplorer:repositories',
      );

      if (storageRepositories) {
        setRepositories([...JSON.parse(storageRepositories)]);
      }
    }
    loadRepositories();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(
      '@GitHubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleAddRepositories = async () => {
    try {
      const response = await api.get<Repository>(`repos/${searchValue}`);

      setRepositories([...repositories, response.data]);
      setInputError({message: '', isError: false});
      setSearchValue('');
    } catch (err) {
      console.log(JSON.stringify(err));
      setInputError({
        message: 'Erro na busca por esse repositório',
        isError: true,
      });
    }
  };

  const handleNavigateDetails = useCallback(
    (name: string) => {
      navigation.navigate('Details', {repository: name});
    },
    [navigation],
  );

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1}}>
        <Container>
          <Title>Explore repositórios no GitHub</Title>

          <Input
            name="userRepo"
            placeholderTextColor="#B7B7CC"
            value={searchValue}
            placeholder="Digite o usuário/repositório"
            onChangeText={(value) => setSearchValue(value)}
            error={inputError.isError}
          />
          <MessageError>{inputError.message}</MessageError>

          <Button onPress={handleAddRepositories}>
            <ButtonText>Adicionar</ButtonText>
          </Button>

          <Content>
            {repositories.map((repositorie, i) => (
              <RepositoriesContainer
                key={i}
                onPress={() => handleNavigateDetails(repositorie.full_name)}>
                <RepositoriesAvatar
                  source={{uri: repositorie.owner.avatar_url}}
                />
                <RepositoriesName>{repositorie.full_name}</RepositoriesName>
              </RepositoriesContainer>
            ))}
          </Content>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
