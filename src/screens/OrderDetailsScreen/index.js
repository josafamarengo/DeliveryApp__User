import { View, Text,Image, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/BasketItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
        <View style={{flex: 1}}>
            <Image 
                source={{ uri: order.Restaurant.image }}
                style={{
                    width: '100%',
                    aspectRatio: 3/2
                }}
            />
            <Text 
                style={{
                    fontSize: 30,
                    fontWeight: '600',
                    margin: 10
                }}
            >{ order.Restaurant.name }
            </Text>

            <Text style={styles.status}>
                { order.status } &#8226; 2 dias atrás
            </Text>

            <Text style={styles.subtitle}>
                Seus pedidos
            </Text>

        </View>

        <Ionicons 
            name="arrow-back-circle"
            size={45}
            color="white"
            style={styles.iconContainer} 
        />
    </View>
  )
}

const OrderDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={OrderDetailsHeader}
                data={restaurants[0].dishes}
                renderItem={({ item }) => <BasketItem basketDish={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: 30,
        left: 10,
    },
    status: {
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 18,
        letterSpacing: 0.7,
        fontWeight: '600',
        marginTop: 20,
        marginLeft: 10,
    },
})

export default OrderDetailsScreen