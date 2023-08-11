import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
   
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
     },
     loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     }
});