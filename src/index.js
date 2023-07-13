import PRODUCTS from './constants/data/products.json'
import { SafeAreaView, Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts} from 'expo-font'
import { Header, ModalItem } from './components';
import { useState } from 'react';
import { Categories, Products } from './screens';
import { COLORS } from './themes';

export default function App() {
  const [loaded] = useFonts ({
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf')
  });
 
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [isVisible, setIsvisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const onHandleSelectCategory = (categoryId) => {
    
    setSelectedCategory(categoryId)     
     
    setIsCategorySelected(!isCategorySelected)
    console.warn(categoryId)
}
const onHandleNavigate = () => {
  setIsCategorySelected(!isCategorySelected);
  setSelectedCategory(null);
}
const onHandleGoDetail = (productId) => {
  const selectedProduct = PRODUCTS.find((products) => products.id === productId);
  console.warn(selectedProduct)

  setSelectedProduct(selectedProduct);
  setIsvisible(true);

};

if (!loaded) {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  );
}

return(
  <SafeAreaView style={styles.container}>
  <View style={styles.container}>
  <Header title='WishList'/>
  {
        isCategorySelected ? (
          <Products categorySelected={selectedCategory} onHandleGoBack={onHandleNavigate} onHandleGoDetail={onHandleGoDetail}/>
        ) : (
          
      <Categories onSelectCategory={onHandleSelectCategory}/>
        )
      }
  </View>
  <ModalItem
  isVisible={isVisible}
  setIsvisible={setIsvisible}
  selectedProduct={selectedProduct}
  />
  
  </SafeAreaView>
)
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});
