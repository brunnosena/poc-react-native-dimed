import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 20px ${Platform.OS === 'android' ? 50 : 40}px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 22px;
  color: #232129;
  margin: 16px 0 24px;
  text-align: center;
`;

export const RepositoriesListContainer = styled.View``;

export const RepositoriesList = styled.View`
  width: 100%;
`;

export const NotRepositories = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #32264d;
  text-align: center;
  margin-top: 10px;
`;

export const RepositoriesContainer = styled(RectButton)`
  background: #ffffff;
  flex-direction: row;
  align-items: center;
  padding: 24px 12px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #e6e6f0;
  margin-top: 10px;
`;

export const RepositoriesAvatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

export const RepositorieInfo = styled.View`
  width: 230px;
  margin-left: 16px;
`;

export const RepositoriesName = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 22px;
  color: #32264d;
`;

export const RepositoriesDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #32264d;
`;

export const TextInput = styled.TextInput`
  font-family: 'Poppins-Regular';
  width: 100%;
  color: #6c6c80;
  font-size: 16px;
  border-radius: 10px;
  border-width: 2px;
  border-color: #232129;
  padding: 16px;
`;

export const MessageError = styled.Text`
  font-family: 'Poppins-Regular';
  margin-left: 0;
  color: #c53030;
  margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #39b100;
  border-radius: 8px;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-Bold';
  font-weight: 600;
  color: #fff;
  font-size: 18px;
`;
