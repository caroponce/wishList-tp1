import {View, Text, FlatList, Button, TouchableOpacity} from 'react-native';
import { CartItem } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { removeAll } from '../../store/cart/cartSlice';
import { styles } from './styles';

const Cart = () =>  {

    const cart = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const onRemoveAll = () => {
        dispatch(removeAll(cart));
      }
    
    return(
        
        <View>
              <FlatList
              data={cart}
              renderItem={({ item }) => <CartItem {...item} />}
              keyExtractor={(item) => item.id.toString()}
            />
        {cart.length === 0 ? (
          <Text style={styles.emptyCart}>Carrito vacío</Text>
        ) : (
            <View>
          
            <TouchableOpacity style={styles.container} onPress={onRemoveAll}>
              <Text style={styles.deleteAll}>Eliminar Todo</Text>
            </TouchableOpacity>
            </View>
        )}
      </View>
    );
  };
       
    

export default Cart;