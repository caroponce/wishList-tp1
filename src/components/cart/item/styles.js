import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";


    export const styles = StyleSheet.create ({
    container: {
    flex: 1,
    flexDirection: 'row',
    height: 145,
    backgroundColor: COLORS.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
  },
  imageContainer: {
    maxWidth: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  detailContainer: {
    justifyContent: 'space-between',
    maxWidth: 190,
    gap: 5,
  },
  name: {
    fontSize: 17,
  },
  price: {
    fontSize: 13,
  },
  qty: {
    fontSize: 12,
  },
  stock: {
    fontSize: 12,
  },
  actionContainer: {
    gap: 20,
    flexDirection: 'row',
  },
  increaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E0E2',
    borderRadius: 10,
    },
  increaseButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },
  decreaseButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E0E2',
    borderRadius: 10,
  },
  decreaseButtonText: {
    color: COLORS.white,
    fontSize: 14,
  },
  deleteButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E0E2',
    borderRadius: 10,
  },
    })