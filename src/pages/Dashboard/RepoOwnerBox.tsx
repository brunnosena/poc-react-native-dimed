import React from 'react';
import RepoOwnerWrapper from 'types/RepoOwnerWrapper';
import Icon from 'react-native-vector-icons/Feather';
import {
  RepositorieInfo,
  RepositoriesAvatar,
  RepositoriesContainer,
  RepositoriesDescription,
  RepositoriesName,
} from 'pages/Dashboard/styles';

const RepoOwnerBox: React.FC<RepoOwnerWrapper> = (props: RepoOwnerWrapper) => {
  const { repoOwner, onPress } = props;
  return (
    <RepositoriesContainer onPress={onPress}>
      <RepositoriesAvatar source={{
        uri: repoOwner.avatar_url,
      }}
      />
      <RepositorieInfo>
        <RepositoriesName>{repoOwner.name}</RepositoriesName>
        {repoOwner.location && (
          <RepositoriesDescription>
            {repoOwner.location}
          </RepositoriesDescription>
        )}
      </RepositorieInfo>
      <Icon name="chevron-right" size={36} color="#39B100" />
    </RepositoriesContainer>
  );
};

export default RepoOwnerBox;
