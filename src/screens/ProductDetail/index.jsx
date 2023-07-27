import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import {styles} from './styles'
import { useWindowDimensions } from "react-native";
import { addToCart } from "../../store/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function ProductDetail ({navigation, route})  {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data)
    const {productId} = route.params;
    const product = products.find((product)=> product.id === productId)
    const {height, width} = useWindowDimensions();
    const isTablet = width > 650
    const onAddToCart = () => {
      dispatch(addToCart(product));
    }
    return(
        <ScrollView contentContainerStyle={isTablet ? styles.containerTablet : styles.container}>
       
          <Text style={height<450 ? styles.textDetailLandsCape : isTablet?  styles. textDetailTablet :styles.textdetail}> Detalle Producto </Text>
          <View style={styles.textcontainer}>
          <Text style={height<450 ? styles.textLandsCape : isTablet?  styles.textTablet :styles.text}> {product.categoryName} {product.name} </Text>
          <Text style={height<450 ? styles.textLandsCape : isTablet?  styles.textTablet :styles.text}> {product.description}</Text>
          <Text style={height<450 ? styles.textLandsCape : isTablet?  styles.textTablet :styles.text}> ${product.price} </Text>
          </View>
          <Image source={{ uri: product.image }} style={height <450 ? styles.productImageLandscape : isTablet ? styles.productImageTablet : styles.productImage}/>
          <TouchableOpacity style={height<450 ? styles.addWishListLandsCape : isTablet?  styles.addWishListTablet : styles.addWishList} onPress={onAddToCart}>
            <Text style={height<450 ? styles.textWishListLandsCape : isTablet?  styles.textWishListTablet : styles.textWishList}> Agregar a la WishList</Text>
          </TouchableOpacity>
      <View>
      
      </View>
    
  
        </ScrollView>
    )
}
export default ProductDetail;