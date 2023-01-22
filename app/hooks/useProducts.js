import React, {useState, useContext, createContext, useMemo} from 'react';
import firestore from '@react-native-firebase/firestore';

const ProductContext = createContext({});

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [schoolSupplies, setSchoolSupplies] = useState([]);
  const [textbooks, setTextbooks] = useState([]);
  const [other, setOther] = useState([]);
  const [apparel, setApparel] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [usersProducts, setUsersProducts] = useState([]);
  const [initialLoad, setInitialLoad] = useState(false);
  const [categoryFilteredProducts, setCategoryFilteredProducts] = useState([]);

  const getAllProducts = () => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const products = [];

        querySnapshot.forEach(documentSnapshot => {
          products.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setProducts(products);
        setInitialLoad(true);

        // console.log(products);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  };

  const isUsersProduct = (item, username) => {
    if (item.username === username) {
      return true;
    }

    return false;
  };

  const isOtherCategory = item => {
    console.log('item: ' + item.category);
    if (item.category === 'Other') {
      return true;
    }

    return false;
  };
  const isApparelCategory = item => {
    console.log('item: ' + item.category);
    if (item.category === 'Apparel') {
      return true;
    }

    return false;
  };
  const isTextbooksCategory = item => {
    console.log('item: ' + item.category);
    if (item.category === 'Textbooks') {
      return true;
    }

    return false;
  };
  const isSchoolSuppliesCategory = item => {
    console.log('item: ' + item.category);
    if (item.category === 'School Supplies') {
      return true;
    }

    return false;
  };
  const isFurnitureCategory = item => {
    console.log('item: ' + item.category);
    if (item.category === 'Furniture') {
      return true;
    }

    return false;
  };

  const getProductCategories = () => {
    if (initialLoad) {
      const otherProducts = products.filter(item => isOtherCategory(item));
      console.log('other: ' + otherProducts);
      const textbookProducts = products.filter(item =>
        isTextbooksCategory(item),
      );
      const schoolSupplyProducts = products.filter(item =>
        isSchoolSuppliesCategory(item),
      );
      const apparelProducts = products.filter(item => isApparelCategory(item));
      const furnitureProducts = products.filter(item =>
        isFurnitureCategory(item),
      );

      console.log('otherproducts ' + otherProducts);

      setOther(otherProducts);
      setApparel(apparelProducts);
      setSchoolSupplies(schoolSupplyProducts);
      setFurniture(furnitureProducts);
      setTextbooks(textbookProducts);
    } else {
      getAllProducts();
      const otherProducts = products.filter(item => isOtherCategory(item));
      console.log('other: ' + otherProducts);
      const textbookProducts = products.filter(item =>
        isTextbooksCategory(item),
      );
      const schoolSupplyProducts = products.filter(item =>
        isSchoolSuppliesCategory(item),
      );
      const apparelProducts = products.filter(item => isApparelCategory(item));
      const furnitureProducts = products.filter(item =>
        isFurnitureCategory(item),
      );

      console.log('otherproducts ' + otherProducts);

      setOther(otherProducts);
      setApparel(apparelProducts);
      setSchoolSupplies(schoolSupplyProducts);
      setFurniture(furnitureProducts);
      setTextbooks(textbookProducts);
    }
  };

  const getUserProfileProducts = username => {
    if (initialLoad) {
      const usersProducts = products.filter(item =>
        isUsersProduct(item, username),
      );

      setUsersProducts(usersProducts);
    } else {
      getAllProducts();
      const usersProducts = products.filter(item =>
        isUsersProduct(item, username),
      );

      setUsersProducts(usersProducts);
    }
  };
  const getStoreProducts = username => {
    console.log('Products ' + products);

    if (initialLoad) {
      const usersProducts = products.filter(item =>
        isUsersProduct(item, username),
      );

      setFilteredProducts(usersProducts);
    } else {
      getAllProducts();
      const usersProducts = products.filter(item =>
        isUsersProduct(item, username),
      );

      setFilteredProducts(usersProducts);
    }

    // console.log(usersServices);
    // console.log(services);
    console.log(username);
  };

  const memoedValue = useMemo(
    () => ({
      getAllProducts,
      getUserProfileProducts,
      usersProducts,
      products,
      getStoreProducts,
      filteredProducts,
      categoryFilteredProducts,
      other,
      schoolSupplies,
      textbooks,
      apparel,
      furniture,
      getProductCategories,
    }),
    [products, getAllProducts],
  );
  return (
    <ProductContext.Provider value={memoedValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default function useProducts() {
  return useContext(ProductContext);
}
