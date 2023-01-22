import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OPTIONS = {
  Apparel: 'shirt-outline',
  Furniture: 'bed-outline',
  'School Supplies': 'pencil-outline',
  Textbooks: 'book-outline',
  Other: 'md-school-outline',
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalCategoryPicker = props => {
  const onPressItem = option => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = Object.entries(OPTIONS).map(([item, icon], index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}>
        <Ionicons name={icon} size={20} style={{marginLeft: 20}} />
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.changeModalVisibility(false)}>
      <SafeAreaView style={[styles.modal, {width: WIDTH, height: HEIGHT}]}>
        <ScrollView>{option}</ScrollView>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default ModalCategoryPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  option: {
    // alignItems: 'flex-start',
    borderRadius: 1,
    borderColor: '#dbdbdb',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    margin: 20,
    fontSize: 17,
  },
});
