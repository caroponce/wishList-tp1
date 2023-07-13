import { StyleSheet } from "react-native"
import { COLORS } from "../../../themes"

export const styles = StyleSheet.create ({

    container: {
       
        backgroundColor:  COLORS.primary,        
        borderRadius: 20,
        alignItems: 'center',
    },
    

categoryName: {
    fontSize: 20,
    color: COLORS.text,
    padding: 20,       
    fontFamily: 'Mulish-Regular'

}
})