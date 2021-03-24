import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Input from 'components/Input';
import RepoOwner from 'types/RepoOwner';
import { getOwnerDetails } from 'services/features/github/GithubService';
import {
  Button,
  ButtonText,
  Container,
  MessageError,
  Title,
} from 'pages/Dashboard/styles';
import RepoOwnerBox from 'pages/Dashboard/RepoOwnerBox';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export interface objError {
  message: string;
  isError: boolean;
}

const Dashboard: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [repoOwner, setRepoOwner] = useState<RepoOwner>();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [inputError, setInputError] = useState<objError>({
    message: '',
    isError: false,
  });

  const handleOwnerButtonPress = () => {
    dispatch({
      type: 'github/add',
      payload: repoOwner,
    });
    navigation.navigate('Repositories', {
      repoOwner,
    });
  };

  const handleAddRepositories = () => {
    if (searchValue) getOwnerDetails(searchValue, setInputError, setRepoOwner);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({
        ios: 'padding',
        default: undefined,
      })}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Title>Explore repositórios no GitHub</Title>

          <Input
            name="userRepo"
            placeholderTextColor="#B7B7CC"
            value={searchValue}
            placeholder="Digite o usuário"
            onChangeText={(value) => setSearchValue(value)}
            error={inputError.isError}
            testID="user-repo"
          />
          <MessageError>{inputError.message}</MessageError>

          <Button testID="button" onPress={handleAddRepositories}>
            <ButtonText>Adicionar</ButtonText>
          </Button>
          {repoOwner && <RepoOwnerBox repoOwner={repoOwner} onPress={handleOwnerButtonPress} />}
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
