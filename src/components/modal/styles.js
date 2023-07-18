import { StyleSheet } from "react-native"
import { COLORS } from "../../themes"

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.background,

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
  textdetail: {
    fontSize: 25,
    margin: 10,

  },
  textcontainer: {
    alignItems: 'center',
    gap: 4,
    margin: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Mulish-Regular',
    
  }
    })