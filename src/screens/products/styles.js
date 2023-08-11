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
    productImageTablet: {
      width: '100%',
      height: 450,
    },
    productImageLandscape:{
      width: '90%',
      height: 100
    },
    productNameLandscape: {
      color: 'red'
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
      productNameTablet: {
        fontSize: 22,
      },
      productnameLandsCape: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Mulish-Regular'
      },

      productPrice: {
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'Mulish-Regular'
      },
      productPriceLandsCape: {
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'Mulish-Regular'
      },
      productPriceTablet: {
      fontSize: 22,
      marginTop: 7,
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
    detalleTablet: {
      backgroundColor: COLORS.primary,
      margin: 7,
      borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        fontFamily: 'Mulish-Regular',
        fontSize: 25,
    },
    detalleLandscape :{
      backgroundColor: COLORS.primary,
      margin: 5,
      borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        fontFamily: 'Mulish-Regular',
        fontSize: 20,
    },
    clearIcon: {
      position: 'absolute',
      zIndex: 2,
      right: 39,
      top: 17,
    },
    goBack: {
      paddingHorizontal: 20,
      paddingBottom: 10,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
 })