import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    containerProduct: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    productImage: {
      width: '100%',
      height: 250,
      /*
     width: 200,
    height: 200,
    resizeMode: 'contain',
      */
    },
    detailProduct:{
    marginTop: 10,
    alignItems: 'center'
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Mulish-Regular'
      },
      productPrice: {
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'Mulish-Regular'
      },
      detalle: {
        backgroundColor: COLORS.primary,
        margin: 5,
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        fontFamily: 'Mulish-Regular'
    },
    clearIcon: {
      position: 'absolute',
      zIndex: 2,
      right: 25,
      top: 3,
    },
    goBack: {
      paddingHorizontal: 20,
      paddingBottom: 10,
    }
 })