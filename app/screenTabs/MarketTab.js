import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Product from '../components/Product';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import useProducts from '../hooks/useProducts';
import CategoryModal from '../components/CategoryModal';

const Market = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [renderedItems, setRenderedItems] = useState([]);

  const {
    getAllProducts,
    products,
    other,
    furniture,
    apparel,
    schoolSupplies,
    textbooks,
    getProductCategories,
  } = useProducts();

  useEffect(() => {
    getAllProducts();

    setLoading(false);
    console.log(products);
  }, []);

  useEffect(() => {
    setRenderedItems(products);
    getProductCategories();
  }, [products]);

  useEffect(() => {
    console.log('hello' + selectedCategory);
    if (selectedCategory === null) {
      setRenderedItems(products);
    } else if (selectedCategory === 'Textbooks') {
      setRenderedItems(textbooks);
    } else if (selectedCategory === 'Furniture') {
      setRenderedItems(furniture);
    } else if (selectedCategory === 'School Supplies') {
      setRenderedItems(schoolSupplies);
    } else if (selectedCategory === 'Apparel') {
      setRenderedItems(apparel);
    } else if (selectedCategory === 'Other') {
      setRenderedItems(other);
    }
  }, [selectedCategory]);

  if (loading) {
    return (
      <SafeAreaView>
        <View
          style={{
            // flex: "1",
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 10,
          }}>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Ionicons
              // style={{ left: 100 }}
              name="apps-sharp"
              size={30}
              color="#e63629"
              // color="#cc0000"
            />
          </TouchableOpacity>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Market</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <Ionicons
              // style={{ left: 100 }}
              name="add-circle"
              size={35}
              color="#e63629"
              // color="#cc0000"
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            flex: 1,
            padding: '100%',
            alignSelf: 'center',
          }}>
          <ActivityIndicator color={'black'} />
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View
        style={{
          // flex: "1",
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Ionicons
            // style={{ left: 100 }}
            name="apps-sharp"
            size={30}
            color="#e63629"
            // color="#cc0000"
          />
        </TouchableOpacity>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Market</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <Ionicons
            // style={{ left: 100 }}
            name="add-circle"
            size={35}
            color="#e63629"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        style={{
          height: '100%',
        }}
        contentContainerStyle={{paddingBottom: 80}}
        numColumns={2}
        data={renderedItems}
        // inverted
        renderItem={({item}) => (
          <Product
            username={item.username}
            userImage={item.userImage}
            title={item.title}
            // description={item.description}
            price={item.price}
            productImage={item.productImage}
            userBio={item.userBio}
          />
        )}
      />
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="fade">
        <CategoryModal
          setIsVisible={setIsVisible}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Modal>

      {/* <ScrollView>
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
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default Market;

const styles = StyleSheet.create({});
