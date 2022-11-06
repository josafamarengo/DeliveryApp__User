import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OrderListItem = ({order}) => {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('OrderDetails', { id: order.id })} style={{flexDirection: 'row', margin: 10}}>
      <Image source={{ uri: order.Restaurant.image }} style={{ width: 85, height: 85, borderRadius: 15, marginRight: 10 }} />

      <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{order.Restaurant.name}</Text>
        <Text>3 itens &#8226; R$ 16,00</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ color: 'green', marginRight: 10 }}>Entregue</Text>
          <Text>2 dias atrás</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default OrderListItem;