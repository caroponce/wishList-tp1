import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Categories, Products, ProductDetail } from '../screens';
import { COLORS } from '../themes';
const Stack = createNativeStackNavigator();

function ShopNavigator({}) {
    return(
        <Stack.Navigator initialRouteName='Categories'
        screenOptions={{
            headerStyle:{
               backgroundColor: COLORS.primary,
            },
            headerTitleStyle: {
                fontSize: 20,
            },
            headerTintColor: COLORS.text,
        }}>
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='Products' component={Products}/>
            <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        </Stack.Navigator>
    )
}

export default ShopNavigator;