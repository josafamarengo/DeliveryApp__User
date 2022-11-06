import { View, Text, FlatList } from 'react-native';
import orders from '../../../assets/data/orders.json';
import OrderListItem from '../../components/OrderListItem';

const OrdersScreen = () => {
  return (
    <View>
        <FlatList 
          data={orders}
          renderItem={({ item }) => <OrderListItem order={item} />}
        />
    </View>
  )
}

export default OrdersScreen;