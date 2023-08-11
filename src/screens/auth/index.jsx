import { useState } from "react";
import { styles } from "./styles";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useSignInMutation, useSignUpMutation } from "../../store/auth/api";
import { useDispatch } from "react-redux";
import {setUser} from '../../store/auth/authSlice'
import { useEffect } from "react";
const Auth = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const title = isLogin ? 'Iniciar Sesión' : 'Crear sesión'
    const buttonTitle = isLogin ? 'Iniciar Sesión' : 'Crear sesión'
    const messageText = isLogin ? '¿No tienes una cuenta? : Registrate' : 'Ya tengo cuenta'
    const [email, setEmail] = useState('')
    const [password, setPasseword] = useState('')
    const [singIn, {data, isLoading}] = useSignInMutation();
    
    const [singUp] = useSignUpMutation();

const onHandlerAuth = async () => {
    try {
      if (isLogin) {
        const result = await singIn({ email, password });
        if (result?.data) dispatch(setUser(result.data));
      } else {
        await singUp({ email, password });
      }
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) return (
    <View style={styles.loader}>       
  <ActivityIndicator></ActivityIndicator>
    </View>
  )
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}> {title} </Text>
                <Text style={styles.label}> Email </Text>
                <TextInput
                placeholder="email@email.com"
                placeholderTextColor='gray'
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <Text style={styles.label}> PassWord </Text>
                <TextInput
                placeholder="********"
                placeholderTextColor='gray'
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
                onChangeText={(text) => setPasseword(text)}
                value={password}
                />
            
            <View style={styles.linkContainer}>
                <TouchableOpacity style={styles.link} onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.linkText}>
                            {messageText}
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onHandlerAuth} >
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Auth;