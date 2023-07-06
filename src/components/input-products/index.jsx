import { View, TextInput, Button} from "react-native";
import { styles } from "./styles";

const InputProducts = ({onHandlerCreateList, onHandlerChangeText, inputProd}) => {
  
    return (
    
        <View style={styles.containerinput}> 
            <TextInput 
                style={styles.input}
                placeholder='Producto Deseado'
                autoCorrect={false}
                placeholderTextColor="#A8577E"            
                selectionColor="#A8577E"
                onChangeText={onHandlerChangeText}
                value={inputProd}
             />
            <Button color="#A8577E" 
                title='Agregar a la WishList'
                onPress={onHandlerCreateList}
                //disabled={inputProd.length === 0}
            />
            
        </View>
    );
};

export default InputProducts;