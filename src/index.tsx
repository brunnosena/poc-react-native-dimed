import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{backgroundColor: '#312e38', flex: 1}}>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Routes />
  </View>
);

export default App;
