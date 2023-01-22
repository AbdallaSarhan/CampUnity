import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <Ionicons
          name="arrow-back-sharp"
          size={25}
          color="#f2f2f2"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerText}>{title}</Text>
        <Ionicons name="ellipsis-horizontal-sharp" size={25} color="#f2f2f2" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    // marginBottom: 10,

    backgroundColor: '#e63629',
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',

    color: '#f2f2f2',
  },
});
