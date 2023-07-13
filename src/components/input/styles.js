import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";
export const styles = StyleSheet.create({
    containerinput : {
        
        marginBottom: 20,
        paddingHorizontal: 20
    },
    input: {
       
      borderWidth: 3,
      borderRadius: 10,
      borderColor: 'black',
      paddingHorizontal: 10,
      color: COLORS.text,
      fontSize: 14,
      height: 35,
    },

})