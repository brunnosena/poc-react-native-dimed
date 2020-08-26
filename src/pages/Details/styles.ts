import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 13px ${Platform.OS === 'android' ? 50 : 40}px;
`;

export const ViewTitle = styled.View`
  background-color: #39b100;
  margin-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 24px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #232129;
  margin: 16px 0 14px;
`;

export const Name = styled.Text`
  font-family: 'Poppins-Regular';
  color: #fff;
  font-size: 24px;
`;

export const RepositoryInfo = styled.View`
  margin: 5px 0 10px 5px;
  flex-direction: row;
`;

export const CardInfo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;

  width: 120px;
  height: 120px;
  margin-right: 5px;
  border-radius: 10px;
  border-color: #e6e6f0;
  border-width: 2px;

  flex-direction: column;
  justify-content: space-around;
`;

export const CardCount = styled.Text`
  font-family: 'Poppins-Bold';
  color: #000000;
  font-size: 24px;
`;

export const CardDescription = styled.Text`
  font-family: 'Poppins-Regular';
  color: #000000;
`;

export const LoadingMessage = styled.Text`
  margin-top: 60px;
`;

export const Issues = styled.ScrollView`
  width: 100%;
`;

export const IssueDetail = styled(RectButton)`
  background: #ffffff;
  border-color: #e6e6f0;
  padding: 16px 12px;
  border-radius: 10px;
  margin-top: 10px;

  flex-direction: row;
  align-items: center;
`;

export const IssueInfo = styled.View`
  width: 280px;
  margin: 0 16px;
`;

export const IssueDetailTitle = styled.Text`
  font-family: 'Poppins-Bold';
  font-size: 13px;
  color: #32264d;
`;
export const IssueDetailText = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #666;
`;
