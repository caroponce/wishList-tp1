import { Text,Modal, View, Button, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles";
import { Ionicons} from '@expo/vector-icons'
import { COLORS } from "../../themes";

const ModalItem = ({isVisible, selectedProduct, setIsvisible}) => {
    return (
      <Modal visible={isVisible} animationType="slide">

      <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.goBack} onPress={() => setIsvisible(false)}>
               <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
           </TouchableOpacity>
        <Text style={styles.textdetail}> Detalle Producto </Text>
        <View style={styles.textcontainer}>
        <Text style={styles.text}> {selectedProduct?.categoryName} </Text>
        <Text style={styles.text}> {selectedProduct?.name} </Text>
        <Text style={styles.text}> {selectedProduct?.description}</Text>
        <Text style={styles.text}> ${selectedProduct?.price} </Text>
        </View>
        <Image source={{ uri: selectedProduct?.image }} style={styles.productImage}/>
        <TouchableOpacity style={styles.addWishList}>
          <Text> Agregar a la WishList</Text>
        </TouchableOpacity>
    <View>
    
    </View>
  

      </View>
    </Modal>
    )
}

export default ModalItem;