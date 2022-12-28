import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeTab from '../screenTabs/HomeTab';
import StoreProfile from '../screens/StoreProfile';

const ServicesStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ServicesPage'}
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoreProfile"
        component={StoreProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ServicesStack;
