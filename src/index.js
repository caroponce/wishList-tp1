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
    <View style={styles.loaderContainer}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  );
}

return(
  <Provider store={store}>
  <SafeAreaView style={styles.container}>
    <RootNavigator/>
  

  
  </SafeAreaView>
  </Provider>
)
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});
