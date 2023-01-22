import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import Btn from '../components/Btn';
import useAuth from '../hooks/useAuth';
import ModalProfileSetupForm from '../components/ModalProfileSetupForm';
import useUser from '../hooks/useUser';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const navigation = useNavigation();
  const {handleSignUp, newUser} = useAuth();
  const {validateUsername, available, invalid, setUsername, username} =
    useUser();

  useEffect(() => {
    if (newUser) {
      setIsVisible(true);
    }
  }, [newUser]);

  const register = () => {
    if (available && invalid === null && fullName != '') {
      handleSignUp(username, email, password, fullName);
    } else if (fullName === '') {
      alert('Please enter your full Name');
    } else {
      alert('Please enter a valid username');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.text}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={text => {
            setFullName(text);
          }}
          style={styles.input}></TextInput>
        <TextInput
          placeholder="Username / Store Name"
          value={username}
          onChange={event => validateUsername(event.nativeEvent.text)}
          onChangeText={text => {
            setUsername(text);
          }}
          style={styles.input}></TextInput>
        {available === null ? null : (
          <Text style={{color: available ? 'green' : 'red'}}>
            @{username} is {available ? 'Available' : 'Taken'}{' '}
          </Text>
        )}
        {invalid === null ? null : (
          <Text style={{color: invalid ? 'red' : 'green'}}>
            @{username} is {invalid ? 'Invalid' : 'Valid'}{' '}
          </Text>
        )}

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Btn
          bgColor="#cc0000"
          width={'100%'}
          textColor={'white'}
          btnLabel="Register"
          fontSize={25}
          fontWeight={'bold'}
          Press={() => register()}
        />
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={{color: '#cc0000'}}>Login</Text>
        </TouchableOpacity>
        <Modal
          visible={isVisible}
          animationType="slide"
          onRequestClose={() => setIsVisible(false)}>
          <ModalProfileSetupForm setIsVisible={setIsVisible} />
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#cc0000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#cc0000',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },

  buttonOutlineText: {
    color: '#cc0000',
    fontWeight: '700',
    fontSize: 16,
  },
});
