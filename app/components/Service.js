import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FinalMe from '../assets/FinalMe.png';
import DeliveryPhoto from '../assets/DeliveryPhoto.jpg';
import Cookies from '../assets/Cookies.jpg';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Service = ({
  uid,
  username,
  userImage,
  title,
  description,
  price,
  serviceImage,
  userBio,
}) => {
  const navigation = useNavigation();
  // console.log(userBio);

  const user = auth().currentUser;
  const handleDelete = () => {
    firestore()
      .collection('services')
      .doc(title)
      .delete()
      .then(() => {
        console.log('service deleted!');
      });
  };
  if (uid === user.uid) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StoreProfile', {
            username: username,
            userImage: userImage,
            userBio: userBio,
          })
        }>
        <View style={styles.container}>
          <View style={styles.headerContainer2}>
            {/* <Image style={styles.profileImage} source={FinalMe} /> */}
            {userImage ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.profileImage} source={{uri: userImage}} />
                <Text style={{color: 'grey'}}>{username}</Text>
              </View>
            ) : (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons
                  name="person-circle-outline"
                  size={50}
                  color="grey"
                  style={styles.avatar}
                />
                <Text style={{color: 'grey'}}>{username}</Text>
              </View>
            )}
            <TouchableOpacity onPress={() => handleDelete()}>
              <Ionicons
                name="trash-outline"
                size={30}
                color="grey"
                style={styles.delete}
              />
            </TouchableOpacity>
          </View>
          <Image style={styles.servicePhoto} source={{uri: serviceImage}} />
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: '500',
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontStyle: 'italic',
              fontWeight: '500',
            }}>
            ${price}
          </Text>
          <Text style={{marginTop: 20}}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('StoreProfile', {
            username: username,
            userImage: userImage,
            userBio: userBio,
          })
        }>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            {/* <Image style={styles.profileImage} source={FinalMe} /> */}
            {userImage ? (
              <Image style={styles.profileImage} source={{uri: userImage}} />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={50}
                color="grey"
                style={styles.avatar}
              />
            )}

            <Text style={{color: 'grey'}}>{username}</Text>
          </View>
          <Image style={styles.servicePhoto} source={{uri: serviceImage}} />
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: '500',
            }}>
            {title}
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontStyle: 'italic',
              fontWeight: '500',
            }}>
            ${price}
          </Text>
          <Text style={{marginTop: 20}}>{description}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

export default Service;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'flex-start',
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor: '#FFF',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    position: 'relative',
  },
  headerContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'relative',
  },
  // delete: {
  //   left: '100%',
  // },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  servicePhoto: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
