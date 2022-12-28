import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import FinalMe from '../assets/FinalMe.png';
import {useNavigation} from '@react-navigation/native';

const ChatRow = ({userMessageDetails}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ChatScreen')}>
      <View style={styles.userDetails}>
        <Image style={styles.profileImage} source={FinalMe} />
        <View style={styles.chatDetails}>
          <Text style={styles.userText}>Deliveroo</Text>
          <Text style={styles.recentChat} numberOfLines={1}>
            This looks pretty good I'm not gon
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 15,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    // margin: 15,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor: '#FFF',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
    marginRight: 20,
  },
  userDetails: {
    flexDirection: 'row',
  },
  userText: {
    fontWeight: '500',
    fontSize: 17,
    marginTop: 20,
  },
  chatDetails: {
    maxWidth: '50%',
  },
  recentChat: {
    fontWeight: '300',
    marginTop: 10,
  },
});
