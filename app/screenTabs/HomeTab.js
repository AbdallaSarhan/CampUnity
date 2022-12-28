import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Service from '../components/Service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View
        style={{
          // flex: "1",
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Market</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <Ionicons
            // style={{ left: 100 }}
            name="add-circle"
            size={45}
            color="#cc0000"
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100%',
            justifyContent: 'space-evenly',
            position: 'relative',
          }}>
          <Service />
          <Service />
          <Service />
          <Service />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
