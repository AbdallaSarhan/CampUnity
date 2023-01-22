import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Market from '../screenTabs/MarketTab';
import Profile from '../screenTabs/ProfileTab';

import Post from '../screenTabs/PostTab';

import ChatStack from './ChatStack';
import ServicesStack from './ServicesStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Services'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Services') {
            iconName = focused ? 'construct' : 'construct-outline';
          } else if (rn === 'Profile') {
            iconName = focused ? 'body' : 'body-outline';
          } else if (rn === 'Market') {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          } else if (rn === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (rn === 'Messages') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: '#e63629',
        tabBarInactiveTintColor: 'grey',
      })}>
      <Tab.Screen
        name={'Services'}
        component={ServicesStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Market'}
        component={Market}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Post'}
        component={Post}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Messages'}
        component={ChatStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
