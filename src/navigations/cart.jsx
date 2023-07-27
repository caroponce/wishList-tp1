import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { COLORS } from '../themes';
import Cart from '../screens/cart';
const Stack = createNativeStackNavigator();

function CartNavigator({}) {
    return(
        <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: COLORS.primary,
            height: 80,
          },
          headerTitleStyle: {
           
            fontSize: 20,
          },
          headerTintColor: COLORS.text,
          animation: 'fade_from_bottom',
        })}>
            <Stack.Screen name='Cart' component={Cart}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default CartNavigator;