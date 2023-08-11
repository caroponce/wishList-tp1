import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './shop'
import CartNavigator from './cart';
import { COLORS } from '../themes';
import { Ionicons } from '@expo/vector-icons/';
import {useSelector} from 'react-redux'
import OrdersNavigator from './orders';
const BottomTab = createBottomTabNavigator();



const TabsNavigator = () => {
    const cart = useSelector((state) => state.cart.items)

  const totalProductsInCart = cart.reduce((total, item) => total + item.quantity, 0);
    return(
       <BottomTab.Navigator initialRouteName="ShopTab" 
       screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
            fontSize: 12,

        },
        tabBarStyle: {
            backgroundColor: COLORS.background
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarIconStyle: {
            fontSize: 20,
        }
        }}>
        <BottomTab.Screen name="ShopTab" component={ShopNavigator} options={{
            tabBarLabel: 'Shop',
            tabBarIcon: ({focused, color, size}) => {
               return <Ionicons name={ focused ? 'home' : 'home-outline'} size={size} color={color}/>
            }
        }}/>        
        <BottomTab.Screen name='CartTab' component={CartNavigator}
        options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({focused, color, size}) => {
               return <Ionicons name={ focused ? 'cart' : 'cart-outline'} size={size} color={color}/>
            },
            tabBarBadge: totalProductsInCart ,
            tabBarBadgeStyle: {
                backgroundColor: COLORS.text,
                color: COLORS.background,
                fontSize: 11,
            }
        }}
        />
           <BottomTab.Screen name='OrdersTab' component={OrdersNavigator}
        options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({focused, color, size}) => {
               return <Ionicons name={ focused ? 'file-tray' : 'file-tray-outline'} size={size} color={color}/>
            }
        }}/> 
   
     </BottomTab.Navigator> 
    )
}

export default TabsNavigator;