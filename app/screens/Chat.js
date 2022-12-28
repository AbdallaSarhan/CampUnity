import {
  Button,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';

const Chat = () => {
  const [input, setInput] = useState('');
  const messages = ['HI', 'how r u', 'good wbu'];
  return (
    <View style={{flex: 1}}>
      <Header title="Deliveroo" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={10}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            style={{paddingLeft: 4}}
            keyExtractor={item => item.id}
            // renderItem={({ item }) => messages.userId === user.uid}
          ></FlatList>
        </TouchableWithoutFeedback>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Send Message..."
            onChange={e => setInput(e.target.value)}
            value={input}
            multiline={true}
          />
          <Button title="Send" color="#cc0000" style={{top: 20}} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: '#c0c1c2',
    borderColor: '#f2f2f2',
    borderWidth: 0.5,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  messageInput: {
    padding: 15,
    width: '85%',
    fontSize: 16,
  },
});
