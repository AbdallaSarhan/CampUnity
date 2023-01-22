import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CategoryBox from './CategoryBox';

const CategoryModal = props => {
  const handleModalClose = () => {
    props.setIsVisible(false);
  };

  return (
    <View style={styles.modal}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={{alignSelf: 'center', margin: 20, fontSize: 30}}>
          What are you looking for?
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <CategoryBox
            category="Browse All"
            style={styles.category}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setIsVisible={props.setIsVisible}
          />
          <CategoryBox
            category="Apparel"
            style={styles.category}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setIsVisible={props.setIsVisible}
          />
          <CategoryBox
            category="Furniture"
            style={styles.category}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setIsVisible={props.setIsVisible}
          />
          <CategoryBox
            category="Textbooks"
            style={styles.category}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setIsVisible={props.setIsVisible}
          />
          <CategoryBox
            category="School Supplies"
            style={styles.category}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setIsVisible={props.setIsVisible}
          />
          <CategoryBox
            category="Other"
            style={styles.category}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setIsVisible={props.setIsVisible}
          />
        </View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => handleModalClose()}>
          <Text style={{fontSize: 16, color: 'red'}}>Cancel</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  ImageUploadContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 40,
    backgroundColor: '#e1e3e3',
    borderColor: '#c0c1c2',
    borderWidth: 2,
    height: 190,
    width: 190,
    borderRadius: 95,
    borderStyle: 'dashed',
    padding: 50,
  },
  category: {
    height: '50%',
  },
  progressBarContainer: {
    alignItems: 'center',
    // width: '50%',
    alignSelf: 'center',
  },
});
