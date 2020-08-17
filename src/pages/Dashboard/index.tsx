import React, {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';

import {
  Container,
  Title,
  Content,
  TextInput,
  Button,
  ButtonText,
  RepositoriesContainer,
  RepositoriesAvatar,
  RepositoriesName,
} from './styles';
import api from '../../services/api';

export interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

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
      // setInputError('');
      // setNewRepo('');
    } catch (err) {
      console.log(JSON.stringify(err));
      // setInputError('Erro na busca por esse repositório');
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

          <TextInput
            placeholderTextColor="#B7B7CC"
            value={searchValue}
            placeholder="Digite o usuário/repositório"
            onChangeText={(value) => setSearchValue(value)}
          />
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
