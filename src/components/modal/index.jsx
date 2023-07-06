import { Text,Modal, View, Button } from "react-native"
import { styles } from "./styles";

const ModalItem = ({isVisible, selProduct, setIsvisible, onHandleDelete}) => {
    return (
        <Modal visible={isVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}> Producto seleccionado </Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailText}>
              
              Ya compraste este producto? Borralo de la lista
            </Text>
            <Text style={styles.selProduct}> {selProduct?.value} </Text>
          </View>
          <View style={styles.modalbuttoncontainer}>
          <Button
              title="Volver a la lista"
              color="#5A944B"
              onPress={() => setIsvisible(false)}
            />
            <Button
              title="Borrar de la lista"
              color="#B52E2E"
              onPress={() => onHandleDelete(selProduct?.id)}
            />
          </View>
          </View>
        </Modal>
    )
}

export default ModalItem;