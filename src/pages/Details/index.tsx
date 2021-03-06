import React, {useState, useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import {
  Container,
  ViewTitle,
  Title,
  Name,
  RepositoryInfo,
  LoadingMessage,
  CardInfo,
  CardCount,
  CardDescription,
  Issues,
  IssueInfo,
  IssueDetail,
  IssueDetailTitle,
  IssueDetailText,
} from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const routeParams = route.params as RepositoryParams;

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get<Repository>(`/repos/${routeParams.repository}`),
        api.get<Issue[]>(`/repos/${routeParams.repository}/issues`),
      ]);

      setRepository(repositoryResponse.data);
      setIssues(issuesResponse.data);
    }

    loadData();
  }, [routeParams.repository]);

  const handleGoToProfile = (endereco: string) => {
    navigation.navigate('Profile', {
      issue_url: endereco,
    });
  };

  return (
    <Container>
      <Title>
        <ViewTitle>
          <Name>{routeParams.repository}</Name>
        </ViewTitle>
      </Title>

      {repository ? (
        <RepositoryInfo>
          <CardInfo>
            <CardCount>{repository.stargazers_count}</CardCount>
            <CardDescription>Stars</CardDescription>
          </CardInfo>
          <CardInfo>
            <CardCount>{repository.forks_count}</CardCount>
            <CardDescription>Forks</CardDescription>
          </CardInfo>
          <CardInfo>
            <CardCount>{repository.open_issues_count}</CardCount>
            <CardDescription>Issues abertas</CardDescription>
          </CardInfo>
        </RepositoryInfo>
      ) : (
        <LoadingMessage>Carregando...</LoadingMessage>
      )}

      <Title>Issues</Title>

      <Issues>
        {issues.map((issue) => (
          <IssueDetail
            key={issue.id}
            onPress={() => handleGoToProfile(issue.html_url)}>
            <IssueInfo>
              <IssueDetailTitle numberOfLines={1}>
                {issue.title}
              </IssueDetailTitle>
              <IssueDetailText>Opened by: {issue.user.login}</IssueDetailText>
            </IssueInfo>
            <Icon name="chevron-right" size={36} color="#39B100" />
          </IssueDetail>
        ))}
      </Issues>
    </Container>
  );
};

export default Details;
