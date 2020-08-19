import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import Routes from './routes';
import reducer from './redux/reducers';

const store = createStore(reducer);

const App: React.FC = () => (
  <Provider store={store}>
    <View style={{ backgroundColor: '#312e38', flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <Routes />
    </View>
  </Provider>
);

export default App;
