import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create ({

container: {
    flex: 1,   

},
deleteAllContainer: {
    backgroundColor: '#E4E0E2',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "center",
    marginBottom: 15,
},
deleteAll: {

},
emptyCart: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
},
checkoutContainer: {
    backgroundColor: COLORS.background,
    borderTopColor: COLORS.primary,
    borderTopWidth: 4,
    padding: 10,
    
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
  },
  checkoutButtonText: {
    color: COLORS.white,
  },
  totalContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  totalText: {
    color: COLORS.white,
  },
  totalPriceText: {
    color: COLORS.white,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
    })