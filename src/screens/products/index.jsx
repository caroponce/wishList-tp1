import { FlatList, SafeAreaView, Text, View, Image, Button, TouchableOpacity, useWindowDimensions} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Ionicons} from '@expo/vector-icons'
import { Input } from "../../components";
import {useSelector} from 'react-redux'


function Products ({navigation, route}) {
    const products = useSelector((state) => state.products.data)

    const {categoryId} = route.params;
    const {height, width} = useWindowDimensions();
    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const isTablet = width > 650
    const onHandleChangeText = (text) => {
        setSearch(text);
        filterBySearch(text);
    }
    const filteredByCategory = products.filter((product) => product.categoryId === categoryId);

    const filterBySearch = (text) => {
        let updatedProductList = [...filteredByCategory]

       updatedProductList = updatedProductList.filter((product) => {
            return product.name.toLowerCase().indexOf(text.toLowerCase()) !== -1

        });
        setFilteredProducts(updatedProductList);
    }

    const clearSearch = () => {
        setSearch('');
        setFilteredProducts([]);
    }
    const onHandleGoDetail = ({productId}) => {
        navigation.navigate('ProductDetail', {productId})
    }
    return(
       <View>
             <View style={styles.header}>
            <Input
            onHandleChangeText={onHandleChangeText}
            value={search}
            placeholder='Search'
            />
             
            {search.length > 0 &&<Ionicons style={styles.clearIcon} onPress={clearSearch} name="close-circle" size={25} color="black" />}
            </View>
            <FlatList 
            data={search.length > 0 ? filteredProducts : filteredByCategory}
            renderItem={({item}) => 
            <View style={styles.containerProduct}>                
            <Image source={{ uri: item.image}} style={height<450 ? styles.productImageLandscape : isTablet? styles.productImageTablet : styles.productImage}/>
            <View style={styles.detailProduct}>
            <Text style={height<450 ? styles.productnameLandsCape : isTablet? styles.productNameTablet : styles.productName}> {item.categoryName} {item.name} </Text>
            <Text style={height<450 ? styles.productPriceLandsCape : isTablet? styles.productPriceTablet : styles.productPrice }> ${item.price}</Text>
            <TouchableOpacity style={isTablet? styles.detalleTablet : height<450 ? detalleLandscape : styles.detalle} onPress={() => onHandleGoDetail({productId: item.id})}>
                 <Text style={styles.textdetalle}> Detalle </Text> 
            </TouchableOpacity>
            </View>
            </View>
        }
            keyExtractor={(item) => item.id.toString()}
            />
            </View>
                
    )


}

export default Products;