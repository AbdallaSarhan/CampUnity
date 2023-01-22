import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';

import useServices from '../hooks/useServices';
import Service from '../components/Service';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product';

const Profile = () => {
  const navigation = useNavigation();
  const [profilePicUrl, setProfilePicUrl] = useState(null);
  const [selected, setSelected] = useState(false);
  // const [usersPosts, setUserPosts] = useState([]);
  const [username, setUsername] = useState(null);
  const [userBio, setUserBio] = useState('');

  const {getUsersProfileServices, usersServices, services} = useServices();
  const {getUserProfileProducts, usersProducts, products} = useProducts();

  useEffect(() => {
    const user = auth().currentUser;

    setProfilePicUrl(user.photoURL);

    const fetchUserDetails = async () => {
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      // console.log('userdoc.get: ' + userDoc.get('username'));
      setUsername(userDoc.get('username'));
      setUserBio(userDoc.get('userBio'));
      // console.log('username: ' + username);
    };

    fetchUserDetails();

    // const imageUrl = userDoc.get('profileimageRef');
  }, []);

  useEffect(() => {
    getUsersProfileServices(username);
    getUserProfileProducts(username);
  }, [username, services, products]);

  const getHeader = () => {
    return (
      <>
        {/* <View style={{width: '100%', height: '100%'}}> */}
        <View style={{padding: 20}}>
          <Text style={styles.profileDescription}>{userBio}</Text>
        </View>

        {/* <View
          styles={{
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}> */}
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <SafeAreaView
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 10,
            backgroundColor: '#e63629',
          }}>
          {/* <Btn
            bgColor={'white'}
            btnLabel="Logout"
            textColor={'red'}
            width={'30%'}
            // Press
            // borderColor
            // borderWidth
            // fontSize
            // fontWeight
          /> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsScreen')}>
            <Ionicons
              // style={{left: '85%'}}
              color={'#f2f2f2'}
              name="settings-outline"
              size={35}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.container}>
        <Image style={styles.profileImage} source={{uri: profilePicUrl}} />

        <Text
          style={{
            padding: 10,
            fontWeight: '500',
            fontSize: 30,
            margin: 5,
          }}>
          {/* {auth().currentUser?.displayName} */}
          {username}
        </Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={styles.profileDescription}>{userBio}</Text>
      </View>
      <View style={styles.dividerContainer}>
        <TouchableOpacity
          onPress={() => setSelected(false)}
          style={{
            ...styles.options1,
            backgroundColor: selected ? 'white' : '#e63629',
          }}>
          <Text
            style={{
              fontWeight: '800',
              alignItems: 'center',
              paddingBottom: 10,
              fontSize: 18,
              color: selected ? '#e63629' : '#f2f2f2',
            }}>
            Services
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(true)}
          style={{
            ...styles.options2,
            backgroundColor: selected ? '#e63629' : 'white',
          }}>
          <Text
            style={{
              fontWeight: '800',
              alignItems: 'center',
              paddingBottom: 10,
              color: 'white',
              fontSize: 18,
              color: selected ? 'white' : '#e63629',
            }}>
            Products
          </Text>
        </TouchableOpacity>
      </View>
      {selected ? (
        <FlatList
          contentContainerStyle={{paddingBottom: 10}}
          style={{height: '100%', flex: 1}}
          data={usersProducts}
          numColumns={2}
          key={''}
          // ListHeaderComponent={getHeader()}
          renderItem={({item}) => (
            <Product
              username={item.username}
              userImage={item.userImage}
              productImage={item.productImage}
              title={item.title}
              // description={item.description}
              price={item.price}
            />
          )}
        />
      ) : (
        // <View style={{width: '100%', height: '100%'}}>
        <FlatList
          style={{height: '100%', flex: 1}}
          data={usersServices}
          // ListHeaderComponent={getHeader()}
          renderItem={({item}) => (
            <Service
              uid={item.uid}
              username={item.username}
              userImage={item.userImage}
              title={item.title}
              description={item.description}
              price={item.price}
              serviceImage={item.serviceImage}
              userBio={item.userBio}
            />
          )}
        />
        // </View>

        // <Service />
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileDescription: {
    // fontStyle: "italic",
    fontWeight: '600',
    color: 'gray',
    paddingBottom: 30,
  },
  options1: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 15,
  },
  options2: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerContainer: {
    backgroundColor: '#cc0000',
    // width: '100%',
    // height: '20%',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  container: {
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    // backgroundColor: 'white',
    marginTop: -50,
  },

  button: {
    backgroundColor: '#cc0000',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});

{
  /* <TextInput
          style={{
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#cc0000',
            margin: 10,
            width: '60%',
          }}
          secureTextEntry>
          password
        </TextInput> */
}
{
  /* <TextInput
          style={{
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#cc0000',
            margin: 10,
            marginTop: 20,
            width: '60%',
          }}>
          {auth().currentUser?.email}
        </TextInput> */
}
{
  /* <TextInput
          style={{
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#cc0000',
            margin: 10,
            marginTop: 20,
            width: '60%',
          }}>
          {username}
        </TextInput> */
}

{
  /* <Btn
            bgColor="white"
            textColor={'#cc0000'}
            btnLabel="Edit Profile"
            fontSize={15}
            fontWeight={'bold'}
            Press={() => navigation.navigate('Register')}
            borderColor={'red'}
            borderWidth={2}
          /> */
}
{
  /* <Btn
            bgColor="#cc0000"
            textColor={'white'}
            btnLabel="Logout"
            fontSize={15}
            fontWeight={'bold'}
            Press={handleSignOut}
            borderColor={'red'}
            borderWidth={2}
          /> */
}

{
  /* <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity> */
}
