import { StyleSheet } from "react-native"
import { COLORS } from "../../../themes"

export const styles = StyleSheet.create ({

    container: {
        backgroundColor:  COLORS.primary,        
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        
        
    },
    

categoryName: {
    fontSize: 20,
    color: COLORS.text,
    padding: 20,       
    fontFamily: 'Mulish-Regular'

},
categoryNameTablet: {
    fontSize: 25,
},
categoryNameLandscape: {
    fontSize: 20,
}
})