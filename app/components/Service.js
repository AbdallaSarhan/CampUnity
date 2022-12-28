import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FinalMe from '../assets/FinalMe.png';
import DeliveryPhoto from '../assets/DeliveryPhoto.jpg';
import Cookies from '../assets/Cookies.jpg';
import {useNavigation} from '@react-navigation/native';

const Service = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('StoreProfile')}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image style={styles.profileImage} source={FinalMe} />
            <Text style={{color: 'grey'}}>Deliveroo</Text>
          </View>
          <Image style={styles.servicePhoto} source={DeliveryPhoto} />
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: '500',
            }}>
            Food Delivery Around Campus
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 16,
              fontStyle: 'italic',
              fontWeight: '500',
            }}>
            $20
          </Text>
          <Text style={{marginTop: 20}}>
            Get you're food delivered to you anywhere around campus. Contact us
            at 123-456-7321 with your order and where you would like it
            delivered. Delivery pass is 20 dollars per month
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={FinalMe} />
          <Text style={{color: 'grey'}}>Freshly Baked Goods</Text>
        </View>
        <Image style={styles.servicePhoto} source={Cookies} />
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: '500',
          }}>
          Campus Baked Cookies
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontStyle: 'italic',
            fontWeight: '500',
          }}>
          $1
        </Text>
        <Text style={{marginTop: 20}}>
          Selling Baked cookies around campus. Call us at 123-456-7899. $1 per 1
          - $4 for 6 - $8 for 12
        </Text>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    // borderRadius: 60,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'flex-start',
    // alignItems: "center",
    flexDirection: 'column',
    margin: 20,
    padding: 20,
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
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  servicePhoto: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
