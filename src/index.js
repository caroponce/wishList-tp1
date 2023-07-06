
import { SafeAreaView, StatusBar, StyleSheet, View, Text, FlatList, Modal, Button } from 'react-native';
import { Header, ItemList } from './components';
import { InputProducts, ModalItem } from './components'
import { useState } from 'react';

export default function App() {
  const [inputProd, setinputProd] = useState("") 
  const [prodList, setprodList] = useState([])
  const [isVisible, setIsvisible] = useState(false);
  const [selProduct, setSelProduct] = useState(null);
     

 const onHandlerCreateList = () => {
  setprodList([
      ...prodList,
      {
          id: Date.now().toString(),
          value: inputProd
      }
  ]);
  setinputProd("");
 };
 const onHandlerChangeText = (text) => {
  setinputProd(text)
 }
 const OnHandlerModal = (item) => {
  setIsvisible(true);
  setSelProduct(item);
};

const onHandleDelete = (id) => {
  setprodList((prevProds) => prevProds.filter((inputProd) => inputProd.id !== id));
  setIsvisible(false);
};
 const renderItem = ({ item }) => <ItemList item={item} onPressItem={OnHandlerModal} />;

  return (
    <SafeAreaView style={styles.safearea} >
    <View style={styles.container}>     
      <Header title='  WishList'/>
      <InputProducts
        onHandlerChangeText={onHandlerChangeText}
        onHandlerCreateList={onHandlerCreateList}
        value={inputProd}
      ></InputProducts>
      
    <FlatList
            style={styles.listContainer}
            contentContainerStyle={styles.list}
            data={prodList}
            renderItem={renderItem}         
            keyExtractor= {(item) => item.id}
          />
      <ModalItem
      isVisible={isVisible}
      setIsvisible={setIsvisible}
      selProduct={selProduct}
      onHandleDelete={onHandleDelete}
      ></ModalItem>
        
  
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
    
  },
  safearea: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  listContainer: {
    gap: 20,
    marginTop: 10,
  },
  list : {
    gap: 15,
    padding: 15,
    
  },
  textlist: {
    backgroundColor: '#F5D7E3',
    fontSize: 25,
    
    borderRadius: 15
  },
  
});
