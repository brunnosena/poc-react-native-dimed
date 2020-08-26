import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <View style={{backgroundColor: '#312e38', flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  </Provider>
);

export default App;
