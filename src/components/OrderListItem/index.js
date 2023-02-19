import { View, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const OrderListItem = ({order}) => {

  const navigation = useNavigation();

  return (
    <Pressable 
      onPress={() => navigation.navigate('OrderDetails', { id: order.id })} 
      style={{
        margin: 10,
        padding: 10, 
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}>
      <View 
        style={{
          flexDirection: 'row', 
          justifyContent: 'space-between',
          borderBottomColor: '#e3e3e3',
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <View 
          style={{
            flexDirection: 'row', 
            alignItems: 'center',
          }}
        >
          <Image 
            source={{ uri: order.Restaurant.image }} 
            style={{ width: 40, aspectRatio: 1, borderRadius: 50, marginRight: 10 }} />
          <Text 
            style={{fontWeight: '500', fontSize: 13}}>
              {order.Restaurant.name}
          </Text>
        </View>
        <Ionicons name="arrow-forward-circle-outline" size={24} color="black" />
      </View>

      <View style={{ margin: 10, justifyContent: 'space-between' }}>
        <Text>3 itens &#8226; R$ 16,00</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{ color: 'green', marginRight: 10 }}>Entregue</Text>
          <Text>2 dias atrás</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 10,
          borderTopWidth: 1,
          borderTopColor: '#e3e3e3',
          paddingTop: 10,
        }}>
         <Text style={{ fontWeight: '500', fontsize: 13, color: '#B22222' }}>Ajuda</Text> 
        <Text style={{ fontWeight: '500', fontSize: 13, color: '#B22222'}}>Adicionar à sacola</Text>
      </View>
    </Pressable>
  )
}

export default OrderListItem;