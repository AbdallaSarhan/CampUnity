import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Service from '../components/Service';
import Product from '../components/Product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import useServices from '../hooks/useServices';
import useProducts from '../hooks/useProducts';

const StoreProfile = ({route}) => {
  const [selected, setSelected] = useState(false);
  // const [storeBio, setStoreBio] = useState('');
  const navigation = useNavigation();
  const {username, userImage, userBio} = route.params;
  console.log(route);
  const {getStoreServices, filteredServices} = useServices();
  const {getStoreProducts, filteredProducts} = useProducts();
  // console.log(userBio);

  useEffect(() => {
    console.log(username + '-' + userImage + '-' + userBio);
    getStoreServices(username);
    getStoreProducts(username);
  }, []);

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
                color: selected ? '#e63629' : 'white',
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
      </>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        {/* <Image style={styles.profileImage} source={FinalMe} /> */}
        {userImage ? (
          <Image style={styles.profileImage} source={{uri: userImage}} />
        ) : (
          <Ionicons
            name="person-circle-outline"
            size={75}
            color="grey"
            style={styles.avatar}
          />
        )}
        <Text style={styles.profileName}>{username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Ionicons
            // style={{ left: 40 }}
            name="chatbubble-sharp"
            size={35}
            color="#e63629"

            // color="black"
          />
        </TouchableOpacity>
      </View>

      {selected && filteredProducts !== [] ? (
        <FlatList
          contentContainerStyle={{paddingBottom: 10}}
          data={filteredProducts}
          key={''}
          numColumns={2}
          ListHeaderComponent={getHeader()}
          renderItem={({item}) => (
            <Product
              username={item.username}
              userImage={item.userImage}
              title={item.title}
              description={item.description}
              price={item.price}
              productImage={item.productImage}
              userBio={item.userBio}
            />
          )}
        />
      ) : !selected && filteredServices !== [] ? (
        <FlatList
          style={{height: '100%'}}
          data={filteredServices}
          ListHeaderComponent={getHeader()}
          renderItem={({item}) => (
            <Service
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
      ) : !selected && filteredServices === [] ? (
        <Text>No Services yet</Text>
      ) : (
        <Text>No Products yet</Text>
      )}
    </SafeAreaView>
  );
};

export default StoreProfile;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    right: 40,
    marginHorizontal: 20,
  },
  avatar: {
    marginRight: 20,
    right: 40,
    marginHorizontal: 20,
    // width: 80,
    // height: 80,
  },
  profileName: {
    paddingTop: 10,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    right: 40,
  },
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

    borderRadius: 15,
  },
  options2: {
    backgroundColor: 'white',
    padding: 5,
    marginHorizontal: 10,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 15,
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
