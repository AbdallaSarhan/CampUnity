import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Service from '../components/Service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import useServices from '../hooks/useServices';

const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const {getAllServices, services} = useServices();

  useEffect(() => {
    getAllServices();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <SafeAreaView>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Services</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <Ionicons name="add-circle" size={35} color="#e63629" />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            flex: 1,
            padding: '100%',
            alignSelf: 'center',
          }}>
          <ActivityIndicator color={'black'} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Services</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <Ionicons name="add-circle" size={35} color="#e63629" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          height: '100%',
          justifyContent: 'space-evenly',
          position: 'relative',
          flex: 1,
        }}>
        <FlatList
          style={{height: '100%', flex: 1}}
          data={services}
          initialNumToRender={3}
          // inverted
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
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
