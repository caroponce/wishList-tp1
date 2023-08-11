import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
 
  confirmetext: {
    fontSize: 25,
    
  },
  button: {
    backgroundColor: COLORS.violet,
    marginBottom: 10,
    alignItems: 'center',
    
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});