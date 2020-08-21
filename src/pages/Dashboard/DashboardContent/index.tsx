import React, { useCallback } from 'react';
import { Content, RepositoriesContainer, RepositoriesAvatar, RepositoriesName } from '../styles';
import { useSelector } from 'react-redux';
import { Repository } from '..';
import { useNavigation } from '@react-navigation/native';

const DashboardContent: React.FC = () => {
    const repos: Repository[] = useSelector((state: any) => state.repos);
    const navigation = useNavigation();


    const handleNavigateDetails = useCallback(
        (name: string) => {
          navigation.navigate('Details', {repository: name});
        },
        [navigation],
      );

    return (<Content>
        {repos.map((repositorie, i) => (
            <RepositoriesContainer
                key={i}
                onPress={() => handleNavigateDetails(repositorie.full_name)}>
                <RepositoriesAvatar
                    source={{ uri: repositorie.owner.avatar_url }}
                />
                <RepositoriesName>{repositorie.description}</RepositoriesName>
            </RepositoriesContainer>
        ))}
    </Content>);
}

export default DashboardContent;