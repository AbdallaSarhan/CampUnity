import {NavigationContainer} from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import AppStackNavigator from './navigationStacks/AppStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
