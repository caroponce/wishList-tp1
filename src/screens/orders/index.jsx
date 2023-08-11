import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { OrderItem } from '../../components';
import { styles } from './styles';
import { useGetOrdersQuery } from '../../store/orders/api';

const Orders = () => {
  const {data, error, isLoading} = useGetOrdersQuery();
  const renderItem = ({ item }) => <OrderItem {...item} />;
  const keyExtractor = (item) => item.id.toString();

  if (isLoading) return (
    <View style={styles.loader}>       
  <ActivityIndicator></ActivityIndicator>
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Orders;