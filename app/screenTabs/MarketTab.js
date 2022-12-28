import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Product from '../components/Product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Market = () => {
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
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({});
