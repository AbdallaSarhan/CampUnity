import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalCategoryPicker from './ModalCategoryPicker';

const SelectComponent = props => {
  const [chosenCategory, setChosenCategory] = useState('Select Category');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = bool => {
    setIsModalVisible(bool);
  };
  const setData = option => {
    setChosenCategory(option);
    props.setCategory(option);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={{
          padding: 25,
          backgroundColor: 'white',
          borderColor: '#c0c1c2',
          borderWidth: 0.5,
          marginTop: 25,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 15}}>{chosenCategory}</Text>
        <Ionicons name="chevron-up" size={15} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => changeModalVisibility(false)}>
        <ModalCategoryPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </View>
  );
};

export default SelectComponent;

const styles = StyleSheet.create({});
