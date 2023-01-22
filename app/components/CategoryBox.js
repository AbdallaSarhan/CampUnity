import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CategoryBox = ({
  category,
  setSelectedCategory,
  setIsVisible,
  selectedCategory,
}) => {
  let icon = '';

  if (category === 'Furniture') {
    icon = 'bed';
  } else if (category === 'School Supplies') {
    icon = 'pencil-outline';
  } else if (category === 'Textbooks') {
    icon = 'book-outline';
  } else if (category === 'Apparel') {
    icon = 'shirt-outline';
  } else if (category === 'Other') {
    icon = 'md-school-outline';
  } else if (category === 'Browse All') {
    icon = 'albums-outline';
  }
  const handleSelectedCategory = () => {
    if (category === 'Browse All') {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }

    setIsVisible(false);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: selectedCategory === category ? '#e63629' : 'white'},
      ]}
      onPress={() => handleSelectedCategory()}>
      <View style={styles.headerContainer}>
        <Ionicons
          name={icon}
          size={80}
          color={selectedCategory === category ? 'white' : 'grey'}
          style={{alignSelf: 'center'}}
        />
        <Text
          style={[
            styles.itemName,
            {color: selectedCategory === category ? 'white' : 'black'},
          ]}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    // flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    margin: 10,
    padding: 5,
    // shadowColor: "#cc0000",
    shadowColor: 'gray',
    shadowOpacity: 0.6,
    backgroundColor: '#FFF',
    width: '40%',
    height: '20%',
  },
  itemName: {
    marginTop: 12,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'normal',
    fontStyle: 'normal',
    // color: '#5A5A5A',
  },
});
