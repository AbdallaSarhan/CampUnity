import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import useStorage from '../hooks/useStorage';

const ImageUpload = ({image, setImage}) => {
  const {pickImage} = useStorage();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
      }}>
      {image ? (
        <TouchableOpacity onPress={() => pickImage(setImage)}>
          <Image
            source={{uri: image}}
            style={{width: 250, height: 200, marginTop: 20}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => pickImage(setImage)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.picturePlaceholder}>
            <Text style={{color: 'grey'}}> Choose Image</Text>
            <Ionicons name="md-camera" size={45} color="grey" />
          </View>
        </TouchableOpacity>
      )}
      {/* {uploading ? (
        <View style={styles.progressBarContainer}>
          <Progress.Bar progress={transferred} width={300} />
        </View>
      ) : (
        <Button
          title="Post"
          btnLabel={'Post'}
          bgColor={'#cc0000'}
          fontWeight="600"
          fontSize="25"
          textColor="white"
          onPress={() => uploadImage(image, setImage)}
        />
      )} */}
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  picturePlaceholder: {
    backgroundColor: '#e1e3e3',
    borderColor: '#c0c1c2',
    borderWidth: 1,
    borderStyle: 'dashed',
    width: 250,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
