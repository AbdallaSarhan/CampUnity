import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAuth from '../hooks/useAuth';

const SettingsScreen = () => {
  const {handleSignOut} = useAuth();
  return (
    <View>
      <Header title={'Settings'} modal={true} />
      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.option}>
          {/* <Ionicons name={'settings'} size={20} style={{marginLeft: 20}} /> */}
          <Text style={styles.text}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => handleSignOut()}>
          {/* <Ionicons name={'settings'} size={20} style={{marginLeft: 20}} /> */}
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    // backgroundColor: 'white',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    // // justifyContent: 'center',
    // justifyContent: 'space-between',
  },
  option: {
    // alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 10,
    padding: 10,
    borderColor: '#cc0000',
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    // margin: 20,
    fontSize: 17,
  },
});
