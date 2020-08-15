import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Image} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

import Logo from '../assets/img/logo.png';
import {NavigationContainer} from '@react-navigation/native';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: '#EBEEF8'},
      }}
      initialRouteName="Dashboard">
      <App.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: {alignSelf: 'center'},
          headerTitle: () => <Image source={Logo} />,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => <Image source={Logo} />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },

          headerBackImage: () => <FeatherIcon name="chevron-left" size={24} />,
        }}
        name="Details"
        component={Details}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
