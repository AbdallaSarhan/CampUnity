import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChatRow from './ChatRow';

const ChatList = () => {
  const userMessages = ['Bob', 'Gorge', 'Mario'];
  return userMessages.length > 0 ? (
    // <FlatList
    //   style={{ height: "100%" }}
    //   data={userMessages}
    //   keyExtractor={(userMessage) => "1"}
    //   renderItem={({ userMessage }) => (
    //     <ChatRow userMessageDetails={userMessage} />
    //   )}
    // />
    <ScrollView style={{height: '100%'}}>
      {userMessages.map(user => {
        return (
          <ScrollView>
            <ChatRow key={user} />
          </ScrollView>
        );
      })}
    </ScrollView>
  ) : (
    <Text>No Messages</Text>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
