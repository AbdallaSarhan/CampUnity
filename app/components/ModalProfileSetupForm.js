import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import useStorage from '../hooks/useStorage';

const ModalProfileSetupForm = props => {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [storeLocation, setStoreLocation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [userBio, setUserBio] = useState('');

  const {pickImage, uploading, transferred, completeProfile} = useStorage();

  const handleModalClose = () => {
    navigation.navigate('HomeScreen');
    props.setIsVisible(false);
  };
  return (
    <View style={styles.modal}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={{alignSelf: 'center', margin: 20, fontSize: 30}}>
          Complete Your Profile!
        </Text>

        {image ? (
          <TouchableOpacity onPress={() => pickImage(setImage)}>
            <Image
              source={{uri: image}}
              style={{
                width: 190,
                height: 190,
                borderRadius: 95,
                borderWidth: 2,
                margin: 40,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.ImageUploadContainer}
            onPress={() => pickImage(setImage)}>
            <Text style={{color: 'grey'}}>Profile Image</Text>
            <Ionicons name="md-camera" size={45} color="grey" />
          </TouchableOpacity>
        )}

        <TextInput
          placeholder="Your Description (max 250 characters)"
          multiline={true}
          numberOfLines={100}
          value={userBio}
          maxLength={250}
          onChangeText={text => setUserBio(text)}
          style={{
            padding: 25,
            paddingTop: 20,
            height: 100,
            backgroundColor: 'white',
            borderRadius: 30,
            marginBottom: 20,
          }}
        />
        <TextInput
          placeholder="Phone Number (Optional)"
          value={phone}
          style={{
            backgroundColor: 'white',
            padding: 20,
            marginBottom: 20,
            borderRadius: 30,
          }}
        />
        <TextInput
          placeholder="Store Location (Optional)"
          value={storeLocation}
          style={{
            backgroundColor: 'white',
            padding: 20,
            marginBottom: 20,
            borderRadius: 30,
          }}
        />
        {uploading ? (
          <View style={styles.progressBarContainer}>
            <Progress.Bar progress={transferred} width={100} />
          </View>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              alignItems: 'center',
              width: '50%',
              alignSelf: 'center',
              padding: 10,
              borderRadius: 20,
            }}
            onPress={() => completeProfile(image, phone, userBio)}>
            <Text style={{color: 'white'}}>Save</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleModalClose()}>
          <Ionicons
            name="arrow-forward-sharp"
            size={40}
            color="grey"
            style={{justifyContent: 'flex-end'}}
          />
          <Text style={{fontSize: 12, color: 'grey'}}>Skip/Done</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ModalProfileSetupForm;

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  ImageUploadContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 40,
    backgroundColor: '#e1e3e3',
    borderColor: '#c0c1c2',
    borderWidth: 2,
    height: 190,
    width: 190,
    borderRadius: 95,
    borderStyle: 'dashed',
    padding: 50,
  },
  progressBarContainer: {
    alignItems: 'center',
    // width: '50%',
    alignSelf: 'center',
  },
});
