import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Content,
  RepositoriesContainer,
  NotRepositories,
  RepositorieInfo,
  RepositoriesAvatar,
  RepositoriesName,
  RepositoriesDescription,
} from 'pages/Dashboard/styles';
import { useSelector } from 'react-redux';
import Repository from 'types/Repository';

const DashboardContent: React.FC = () => {
  const repos: Repository[] = useSelector((state: any) => state.github.repos);
  const navigation = useNavigation();

  const handleNavigateDetails = useCallback(
    (name: string) => {
      navigation.navigate('Details', { repository: name });
    },
    [navigation],
  );

  return (
    <Content>
      {repos.length === 0 && (
        <NotRepositories>Não há repositórios adicionados.</NotRepositories>
      )}
      {repos.map((repositorie, i) => (
        <RepositoriesContainer
          key={i}
          onPress={() => handleNavigateDetails(repositorie.full_name)}>
          <RepositoriesAvatar source={{ uri: repositorie.owner.avatar_url }} />
          <RepositorieInfo>
            <RepositoriesName>{repositorie.full_name}</RepositoriesName>
            <RepositoriesDescription>
              {repositorie.description}
            </RepositoriesDescription>
          </RepositorieInfo>
          <Icon name="chevron-right" size={36} color="#39B100" />
        </RepositoriesContainer>
      ))}
    </Content>
  );
};

export default DashboardContent;
