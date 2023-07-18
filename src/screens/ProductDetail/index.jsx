import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {styles} from './styles'
import PRODUCTS from '../../constants/data/products.json'
import { useWindowDimensions } from "react-native";

function ProductDetail ({navigation, route})  {
    const {productId} = route.params;
    const products = PRODUCTS.find((product)=> product.id === productId)
    const {height, width} = useWindowDimensions();
    const isTablet = width > 650
    return(
        <ScrollView contentContainerStyle={isTablet ? styles.containerTablet : styles.container}>
       
          <Text style={height<450 ? styles.textDetailLandsCape : isTablet?  styles. textDetailTablet :styles.textdetail}> Detalle Producto </Text>
          <View style={styles.textcontainer}>
          <Text style={height<450 ? styles.textLandsCape : isTablet?  styles.textTablet :styles.text}> {products.categoryName} {products.name} </Text>
          <Text style={height<450 ? styles.textLandsCape : isTablet?  styles.textTablet :styles.text}> {products.description}</Text>
          <Text style={height<450 ? styles.textLandsCape : isTablet?  styles.textTablet :styles.text}> ${products.price} </Text>
          </View>
          <Image source={{ uri: products.image }} style={height <450 ? styles.productImageLandscape : isTablet ? styles.productImageTablet : styles.productImage}/>
          <TouchableOpacity style={height<450 ? styles.addWishListLandsCape : isTablet?  styles.addWishListTablet : styles.addWishList}>
            <Text style={height<450 ? styles.textWishListLandsCape : isTablet?  styles.textWishListTablet : styles.textWishList}> Agregar a la WishList</Text>
          </TouchableOpacity>
      <View>
      
      </View>
    
  
        </ScrollView>
    )
}
export default ProductDetail;