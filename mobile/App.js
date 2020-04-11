import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import Main from './src/pages/Main';
import Profile from './src/pages/Profile';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  headerStyle: {
    backgroundColor: '#7159c1',
  },
  headerTintColor: '#fff'
};

export default function App() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : MyTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Main} options={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false
        }} />
        <Stack.Screen name="Perfil" component={Profile} options={{
          headerStyle: {
            backgroundColor: '#7159c1',
          },
          headerTintColor: '#fff',
          headerBackTitleVisible: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
