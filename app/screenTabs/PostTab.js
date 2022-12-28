import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import React, {useState} from 'react';
// import * as ImagePicker from "expo-image-picker";
import Ionicons from 'react-native-vector-icons/Ionicons';
// import SelectComponent from "../SelectComponent";
import {SafeAreaView} from 'react-native-safe-area-context';
import SelectComponent from '../components/SelectComponent';
// import Checkbox from "expo-checkbox";

const Post = () => {
  const [image, setImage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState(null);

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 40,
          }}>
          {image ? (
            <TouchableOpacity>
              <Image
                source={{uri: image}}
                style={{width: 250, height: 200, marginTop: 20}}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.picturePlaceholder}>
              <TouchableOpacity
                style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'grey'}}> Choose Image</Text>
                <Ionicons
                  // style={{ left: 100 }}
                  name="md-camera"
                  size={45}
                  color="grey"

                  // color="black"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <TextInput
          placeholder="Title of Product/Service"
          style={{
            padding: 25,
            backgroundColor: 'white',
            borderColor: '#c0c1c2',
            borderWidth: 0.5,
            fontSize: 16,
            // borderColor: "white",
            width: '100%',
          }}
        />
        <TextInput
          placeholder="Description"
          multiline={true}
          numberOfLines={100}
          style={{
            padding: 25,
            paddingTop: 20,
            height: 200,

            backgroundColor: 'white',
            borderColor: '#c0c1c2',
            borderWidth: 0.5,
            width: '100%',
            fontSize: 16,
          }}
        />
        <View>
          <TextInput
            placeholder="Price"
            defaultValue="0.00"
            style={{
              padding: 25,
              marginLeft: '50%',
              backgroundColor: 'white',
              borderColor: '#c0c1c2',
              borderWidth: 0.5,
              marginTop: 25,
              width: '40%',
            }}
          />
        </View>
        <SelectComponent setCategory={setCategory} />

        <View
          style={{
            marginTop: 30,
            width: '70%',
            alignSelf: 'center',
          }}>
          <Button
            title="Post"
            btnLabel={'Post'}
            bgColor={'#cc0000'}
            fontWeight="600"
            fontSize="25"
            textColor="white"
            onPress={() => console.log(category)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;

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
