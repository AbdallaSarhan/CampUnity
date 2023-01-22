import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import ChatList from '../components/ChatList';
const ChatTab = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <View>
        <ChatList />
      </View>
    </View>
  );
};

export default ChatTab;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    // flex: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    // marginTop: ,
    backgroundColor: '#e63629',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#f2f2f2',
  },
});
