import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '@react-native-community/checkbox';
import SelectComponent from '../components/SelectComponent';
import CurrencyInput from 'react-native-currency-input';
import ImageUpload from '../components/ImageUpload';
import useStorage from '../hooks/useStorage';
import * as Progress from 'react-native-progress';

const Post = () => {
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [service, setService] = useState(false);
  const [product, setProduct] = useState(false);
  const {saveService, saveProduct, transferred, uploading} = useStorage();

  const toggleServiceCheckBox = newValue => {
    setService(newValue);
    setProduct(!newValue);
  };
  const toggleProductCheckBox = newValue => {
    setProduct(newValue);
    setService(!newValue);
  };

  const handleServicePost = () => {
    if (service && price && title && description && image) {
      saveService(title, description, price, image);
      setImage(null);
      setPrice(null);
      setTitle(null);
      setDescription(null);
      setService(false);
      setProduct(false);
    } else {
      alert('Please fill all the fields');
    }
  };
  const handleProductPost = () => {
    if (product && price && title && description && image && category) {
      saveProduct(title, description, price, image, category);
      setImage(null);
      setPrice(null);
      setTitle(null);
      setDescription(null);
      setService(false);
      setProduct(false);
      setCategory(null);
    } else {
      alert('Please fill all the fields');
    }
  };

  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <ImageUpload image={image} setImage={setImage} />
          <TextInput
            placeholder="Title of Product/Service"
            value={title}
            onChangeText={text => setTitle(text)}
            style={{
              padding: 25,
              backgroundColor: 'white',
              borderColor: '#c0c1c2',
              borderWidth: 0.5,
              fontSize: 16,
              width: '100%',
            }}
          />
          <TextInput
            placeholder="Description"
            multiline={true}
            numberOfLines={100}
            value={description}
            onChangeText={text => setDescription(text)}
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
              }}>
              <Text style={{marginRight: 10}}>Service</Text>
              <CheckBox
                disabled={false}
                value={service}
                onValueChange={newValue => toggleServiceCheckBox(newValue)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
              }}>
              <Text style={{marginRight: 10}}>Product</Text>
              <CheckBox
                disabled={false}
                value={product}
                onValueChange={newValue => toggleProductCheckBox(newValue)}
              />
            </View>
          </View>
          {product ? <SelectComponent setCategory={setCategory} /> : null}
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CurrencyInput
              placeholder="Price"
              value={price}
              onChangeValue={setPrice}
              prefix="$"
              delimiter=","
              separator="."
              precision={2}
              minValue={0}
              style={{
                padding: 25,
                backgroundColor: 'white',
                borderColor: '#c0c1c2',
                borderWidth: 0.5,
                alignSelf: 'center',
                width: '50%',
                margin: 30,
              }}
            />
            {uploading ? (
              <View style={styles.progressBarContainer}>
                <Progress.Bar
                  progress={transferred}
                  width={300}
                  style={{padding: 10}}
                />
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  padding: 10,
                  backgroundColor: '#e63629',
                  width: '100%',
                  alignItems: 'center',
                  borderRadius: 20,
                }}
                onPress={() => {
                  service ? handleServicePost() : handleProductPost();
                }}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 25,
                    color: '#f2f2f2',
                  }}>
                  Post
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({});
