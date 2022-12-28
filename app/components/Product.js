import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FinalMe from '../assets/FinalMe.png';
import Cookies from '../assets/Cookies.jpg';
import {useNavigation} from '@react-navigation/native';

const Item = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('StoreProfile')}
      style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={Cookies} />
      </View>
      <Text style={styles.itemName}>Item Name</Text>
      <Text style={styles.price}>$100</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: 15,
    margin: 5,
    padding: 5,
    // shadowColor: "#cc0000",
    shadowColor: 'gray',
    shadowOpacity: 0.6,
    backgroundColor: '#FFF',
    width: '47%',
  },
  itemName: {
    marginTop: 8,
    fontWeight: '400',
    // color: "#5A5A5A",
  },
  price: {
    marginTop: 35,
    fontSize: 20,
    // fontWeight: "600",
    // color: "#5A5A5A",
  },

  image: {
    width: '100%',
    height: 150,
    // borderRadius: "25",
    // marginHorizontal: 10,
  },
});
