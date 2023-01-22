import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Product = ({
  title,
  price,
  productImage,
  username,
  userImage,
  userBio,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('StoreProfile', {
          username: username,
          userImage: userImage,
          userBio: userBio,
        })
      }
      style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.image} source={{uri: productImage}} />
      </View>
      <Text style={styles.itemName}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    // justifyContent: 'flex-start',
    // flexDirection: 'column',

    marginTop: 15,
    margin: 2,
    padding: 5,
    // shadowColor: "#cc0000",
    shadowColor: 'gray',
    shadowOpacity: 0.6,
    backgroundColor: '#FFF',
    width: '49%',
    height: '97%',
  },
  itemName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    // color: '#5A5A5A',
  },
  price: {
    marginTop: 35,
    fontSize: 17,
    // fontWeight: "600",
    // color: "#5A5A5A",
  },

  image: {
    width: '100%',
    height: 180,
    // borderRadius: "25",
    // marginHorizontal: 10,
  },
});
