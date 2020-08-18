import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 50 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #232129;
  margin: 16px 0 14px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const RepositoryInfo = styled.View`
  margin-top: 5px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const CardInfo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e5e5;

  width: 120px;
  height: 120px;
  margin-right: 10px;
  border-radius: 20px;
  border-color: #fca311;
  border-width: 1px;

  flex-direction: column;
  justify-content: space-around;
`;
export const CardCount = styled.Text`
  color: #000000;
  font-size: 24px;
`;
export const CardDescription = styled.Text`
  color: #000000;
`;

export const LoadingMessage = styled.Text`
  margin-top: 60px;
`;

export const Issues = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const IssueDetail = styled(RectButton)`
  background: #3e3b43;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  border-radius: 10px;
  margin-top: 10px;

  flex: 1;
  justify-content: space-between;
`;

export const IssueDetailTitle = styled.Text`
  width: 180px;
  font-size: 13px;
  color: #f4ede8;
`;
export const IssueDetailText = styled.Text`
  text-align: right;
  font-size: 12px;
  color: #f4ede8;
`;
