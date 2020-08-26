import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Image, Text} from 'react-native';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Profile from '../pages/Profile';

import Logo from '../assets/img/logo.png';

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
          headerTitleAlign: 'center',
          headerTitleStyle: {alignSelf: 'center', justifyContent: 'center'},
          headerTitle: () => <Image source={Logo} />,
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <App.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {alignSelf: 'center', justifyContent: 'center'},
          headerTitle: () => <Image source={Logo} />,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
        }}
        name="Details"
        component={Details}
      />
      <App.Screen
        options={{
          headerTitle: () => (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
              }}>
              Issue
            </Text>
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {
            alignSelf: 'center',
            justifyContent: 'center',
          },
        }}
        name="Profile"
        component={Profile}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
