import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import Input from '../../components/Input';
import DashboardContent from './DashboardContent';
import {
  Container,
  Title,
  MessageError,
  Button,
  ButtonText,
} from './styles';
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
  const dispatch = useDispatch();
  const repos: Repository[] = useSelector((store: any) => store.repos);
  const [searchValue, setSearchValue] = useState('');
  const [inputError, setInputError] = useState<objError>({
    message: '',
    isError: false,
  });

  const handleAddRepositories = async () => {
    try {      
      if (!repos.find(repo => repo.full_name.toUpperCase() === searchValue.toUpperCase())) {
        const { data } = await api.get<Repository>(`repos/${searchValue}`);

        dispatch({
          type: 'ADD_REPO', payload: {
            repo: data
          }
        });
      }

      setInputError({ message: '', isError: false });
      setSearchValue('');
    } catch (err) {
      console.log(JSON.stringify(err));
      setInputError({
        message: 'Erro na busca por esse repositório',
        isError: true,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({
        ios: 'padding',
        default: undefined
      })}
      enabled>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
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

          <DashboardContent />
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
