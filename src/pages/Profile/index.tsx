import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';

interface PageProps {
  issue_url: string;
}

const Profile: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as PageProps;

  return <WebView style={{flex: 1}} source={{uri: routeParams.issue_url}} />;
};

export default Profile;
