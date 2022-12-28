import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatTab from '../screenTabs/ChatTab';
import Chat from '../screens/Chat';

const ChatStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Chats'}
        component={ChatTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
