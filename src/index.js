import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts} from 'expo-font'
import { COLORS } from './themes';
import RootNavigator from './navigations';

import { Provider } from 'react-redux';
import {store} from './store'
export default function App() {
  const [loaded] = useFonts ({
    'Mulish-Regular': require('../assets/fonts/Mulish-Regular.ttf')
  });


if (!loaded) {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  );
}

return(
  <Provider store={store}>
    <View style={styles.container}>
    <RootNavigator/>
  

    </View>
  </Provider>
 
)
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});
