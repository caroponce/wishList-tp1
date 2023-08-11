import { StyleSheet } from "react-native";
import {COLORS} from '../../themes'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: COLORS.background,
    
      },
      containerTablet: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        padding: 15,
      },
      productImage: {
        width: '100%',
          height: 500,
      },
      addWishList: {
        backgroundColor: COLORS.primary,
        marginTop: 15,
        padding: 5,
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        fontFamily: 'Mulish-Regular'
        
      },
      addWishListLandsCape: {
        backgroundColor: COLORS.primary,
        marginTop: 15,
        padding: 5,
        borderColor: 'black',
        borderRadius: 2,
        borderWidth: 1,
        fontFamily: 'Mulish-Regular'
      },
  addWishListTablet: {
  backgroundColor: COLORS.primary,
  marginTop: 19,
  padding: 7,
  borderColor: 'black',
  borderRadius: 2,
  borderWidth: 1,
  fontFamily: 'Mulish-Regular',
},
      textdetail: {
        fontSize: 25,
        margin: 10,
    
      },
      textDetailLandsCape: {
        fontSize: 25,
        margin: 10,
      },
      textDetailTablet: {
        fontSize: 35,
        margin: 12,
      },
      textcontainer: {
        alignItems: 'center',
        gap: 4,
        margin: 10,
      },
      text: {
        fontSize: 17,
        fontFamily: 'Mulish-Regular'
      },
      textLandsCape: {
        fontSize: 17,
        fontFamily: 'Mulish-Regular'
      },
textTablet: {
  fontSize: 30,
  fontFamily: 'Mulish-Regular'
},

      productImageLandscape: {
        width: '50%',
        height: 250,
      },
      productImageTablet: {
        width: '100%',
        height: 800,
      },
      textWishListLandsCape: {},
      textWishListTablet: {
      fontSize: 30,
      },
        textWishList:{

    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })