import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useCreateUserMutation } from "../../store/settings/api";
import { useSelector } from "react-redux";
const InputProfile = () => {
    const localId = useSelector((state) => state.auth.user.localId);
    
    const [createUser, {data, isLoading, isError, error }] = useCreateUserMutation();
      const [name, setName] = useState('')
      const [lastName, setLastName] = useState('')
        
      const onHandlerName = (text) => {
        setName(text);
      };
    
      const onHandlerLastname = (text) => {
        setLastName(text);
      };
    
      const onHandleUploadData =  () => {
       createUser({ localId, name, lastName }); 
       console.warn('hola')
      }
      console.warn({error})
      console.warn({name, lastName})
    return (
    <View>
        <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholderTextColor="#A8577E"            
        selectionColor="#A8577E"
        placeholder="name"
        onChangeText={onHandlerName}
        value={name}
        />
            <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholderTextColor="#A8577E"            
        selectionColor="#A8577E"
        placeholder="lastname"
        onChangeText={onHandlerLastname}
        value={lastName}
        />
        <TouchableOpacity onPress={onHandleUploadData}>
            <Text> Enviar </Text>
        </TouchableOpacity>
    </View>
    );
  };
export default InputProfile;