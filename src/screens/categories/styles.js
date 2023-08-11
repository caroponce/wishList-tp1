import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
       flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
      },
      categoryList:{
        gap: 15,
        
      },
      categoryContainer: {
        marginHorizontal: 10,
        marginTop: 10,
      },
      loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
      //  categoryItemLandscape: {
      //   marginTop: 20
      //  }
  });