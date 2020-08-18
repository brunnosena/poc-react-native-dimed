import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #232129;
  margin: 16px 0 24px;
`;

export const RepositoriesListContainer = styled.View``;

export const RepositoriesList = styled.View`
  width: 100%;
`;

export const RepositoriesContainer = styled(RectButton)`
  background: #3e3b43;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 10px;
`;

export const RepositoriesAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const RepositoriesName = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  color: #f4ede8;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  color: #6c6c80;
  font-size: 16px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #232129;
  padding: 16px;
`;

export const MessageError = styled.Text`
  margin-left: 0;
  color: #c53030;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #2a9d8f;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
