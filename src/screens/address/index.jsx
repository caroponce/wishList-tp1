import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { LocationSelector } from '../../components/'
import { useState } from "react";
import { useUpdateAddressMutation } from "../../store/settings/api";
import { URL_BASE_GEOCODING, GOOGLE_API_KEY } from "../../constants/maps";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { COLORS } from "../../themes";
const Address = ({navigation}) => {
    const localId = useSelector((state) => state.auth.user.localId);
    const [location, setLocation] = useState(null);
    const [address, setAddress] = useState(null);
    const [updateAddress, {isLoading}] = useUpdateAddressMutation();
    const onLocation = async ({ lat, lng }) => {
      setLocation({ lat, lng });
    };
  
    const onHandlerUpdateLocation = () => {
      updateAddress({ localId, address, location });
      navigation.navigate('Settings');
    };
  
    useEffect(() => {
      if (location) {
        const getGeocoding = async () => {
          const response = await fetch(
            `${URL_BASE_GEOCODING}/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`
          );
  
          const data = await response.json();
  
          if (!data.results) {
            throw new Error('Something went wrong!');
          }
  
          const address = data.results[0].formatted_address;
  
          setAddress(address);
        };
  
        getGeocoding();
      }
    }, [location]);
    if (isLoading) return (
      <View style={styles.loader}>       
    <ActivityIndicator></ActivityIndicator>
      </View>
    )
    return(
        <View style={styles.container}>
           <LocationSelector onLocation={onLocation} />
           <TouchableOpacity onPress={onHandlerUpdateLocation} style={styles.button}>
            <Text style={styles.confirmetext}> Confirmar </Text>
           </TouchableOpacity>
        </View>
    )
}

export default Address;