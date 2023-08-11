import { styles } from "./styles";
import { TouchableOpacity, View, Text,Image, Alert } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import {requestCameraPermissionsAsync, launchCameraAsync} from 'expo-image-picker'
import { useState } from "react";
const ImageSelector = ({profileImage, onSelect}) => {
    const [image, setImage] = useState(null)
    const verifyPermissions = async () => {
        const { status } = await requestCameraPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                "Permiso denegado"
            )
            return false;
        }
        return true;
    }
    const onhandlerTakePhoto = async () => {
        const isCameraPermission = await verifyPermissions();
        if(!isCameraPermission) return;
        const result = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
            base64: true,

        });
        await onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
        setImage(result.assets[0].uri);
    }
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onhandlerTakePhoto} style={styles.content} >
            {(image || profileImage ) ? (
                    <Image source={{ uri: image|| profileImage }}  style={styles.image} resizeMode="contain"/>
                ) : (
                    <Ionicons name="camera-outline" color='black' size={30}/>
                )

                }
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;