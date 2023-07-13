import { View, TextInput, Button} from "react-native";
import { styles } from "./styles";

const Input = ({ onHandleChangeText, value, ...props}) => {
  
    return (
    
        <View style={styles.containerinput}> 
            <TextInput 
            {...props}
                style={styles.input}
                autoCorrect={false}
                placeholderTextColor="#A8577E"            
                selectionColor="#A8577E"
                onChangeText={onHandleChangeText}
                value={value}
               
             />
       
            
        </View>
    );
};

export default Input;