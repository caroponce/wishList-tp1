import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Categories, Products, ProductDetail } from '../screens';
import { COLORS } from '../themes';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SettingsNavigator from './settings';
const Stack = createNativeStackNavigator();

function ShopNavigator({}) {
    return(
        <Stack.Navigator initialRouteName="Categories"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: 80,
          },
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTintColor: 'black',
          animation: 'fade_from_bottom',
          headerRight: () => (
            <TouchableOpacity
              style={styles.icon}
              onPress={() => navigation.navigate('SettingsStack')}>
              <Ionicons name="settings-outline" size={24} color={COLORS.text} />
            </TouchableOpacity>
          ),
        })}>
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Products' component={Products}/>
            <Stack.Screen name='ProductDetail' component={ProductDetail}/>
            <Stack.Screen name="SettingsStack" component={SettingsNavigator} options={({ navigation, route }) => ({headerShown: false,})}
      />
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        
      }
      
    });

export default ShopNavigator;