import { FlatList, SafeAreaView, Text, View, Image, Button, TouchableOpacity} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import PRODUCTS from '../../constants/data/products.json'
import { Ionicons} from '@expo/vector-icons'
import { COLORS } from "../../themes";
import { Input } from "../../components";

function Products ({onHandleGoBack, categorySelected, onHandleGoDetail, productId}) {

    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    const onHandleChangeText = (text) => {
        setSearch(text);
        filterBySearch(text);
    }
    const filteredByCategory = PRODUCTS.filter((product) => product.categoryId === categorySelected.categoryId);

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
 
    return(
       <View>
             <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
                 <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
             </TouchableOpacity>
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
            <Image source={{ uri: item.image}} style={styles.productImage}/>
            <View style={styles.detailProduct}>
            <Text style={styles.productName}> {item.categoryName} {item.name} </Text>
            <Text> ${item.price}</Text>
            <TouchableOpacity style={styles.detalle} onPress={() => onHandleGoDetail(item.id)}>
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