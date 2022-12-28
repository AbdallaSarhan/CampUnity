import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import FinalMe from '../assets/FinalMe.png';
import Service from '../components/Service';
import Item from '../components/Product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const StoreProfile = () => {
  const [selected, setSelected] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Image style={styles.profileImage} source={FinalMe} />
        <Text style={styles.profileName}>
          {/* {auth.currentUser?.email} */}
          Deliveroo
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
          <Ionicons
            // style={{ left: 40 }}
            name="chatbubble-sharp"
            size={35}
            color="#cc0000"

            // color="black"
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <View style={{padding: 20}}>
          <Text style={styles.profileDescription}>
            I am a freelancer. I create web applications, mobile applications
            and much more. Contact me for more details and qoutes
          </Text>
        </View>

        <View
          styles={{
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.dividerContainer}>
            <TouchableOpacity
              onPress={() => setSelected(false)}
              style={{
                ...styles.options1,
                backgroundColor: selected ? 'white' : '#cc0000',
              }}>
              <Text
                style={{
                  fontWeight: '800',
                  alignItems: 'center',
                  paddingBottom: 10,
                  fontSize: 18,
                  color: selected ? '#cc0000' : 'white',
                }}>
                Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected(true)}
              style={{
                ...styles.options2,
                backgroundColor: selected ? '#cc0000' : 'white',
              }}>
              <Text
                style={{
                  fontWeight: '800',
                  alignItems: 'center',
                  paddingBottom: 10,
                  color: 'white',
                  fontSize: 18,
                  color: selected ? 'white' : '#cc0000',
                }}>
                Products
              </Text>
            </TouchableOpacity>
          </View>
          {selected ? (
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              <Item />
              <Item />
            </View>
          ) : (
            <Service />
          )}
          {/* <Service />
            <Service />
            <Service /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StoreProfile;

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    right: 40,
  },
  headerContainer: {
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginTop: 40,
    flexDirection: 'row',
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
