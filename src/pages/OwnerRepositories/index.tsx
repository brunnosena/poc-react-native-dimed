import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import RepoOwner from 'types/RepoOwner';
import { StackScreenProps } from '@react-navigation/stack';
import { getRepos } from 'services/features/github/GithubService';
import Repository from 'types/Repository';
import Icon from 'react-native-vector-icons/Feather';
import {
  RepositorieInfo,
  RepositoriesContainer,
  RepositoriesDescription,
  RepositoriesName,
  RepositoriesAvatar,
} from 'pages/Dashboard/styles';
import { useNavigation } from '@react-navigation/core';

type RootStackParamList = {
  Repositories: RepoOwner;
};

type Props = StackScreenProps<RootStackParamList, 'Repositories'>;

const OwnerRepositories: React.FC<Props> = ({ route }: Props) => {
  const { repoOwner } = route.params;
  const [repos, setRepos] = useState<Repository[] | null>(null);
  useEffect(() => {
    getRepos(repoOwner.login).then((completion) => {
      setRepos(completion);
    });
  }, []);
  const navigation = useNavigation();

  const handleOnPress = (repository: string) => {
    navigation.navigate('Details', {
      repository,
    });
  };

  return (
    <ScrollView>
      { repos && repos.map((repo, index) => (
        <RepositoriesContainer onPress={() => handleOnPress(repo.full_name)} key={index}>
          <RepositoriesAvatar source={{
            uri: repoOwner.avatar_url,
          }}
          />
          <RepositorieInfo>
            <RepositoriesName>{repo.full_name}</RepositoriesName>
            <RepositoriesDescription>
              {repo.description}
            </RepositoriesDescription>
          </RepositorieInfo>
          <Icon name="chevron-right" size={36} color="#39B100" />
        </RepositoriesContainer>
      ))}
    </ScrollView>
  );
};

export default OwnerRepositories;
