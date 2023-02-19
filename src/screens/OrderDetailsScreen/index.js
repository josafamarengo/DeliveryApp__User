import { View, Text,Image, StyleSheet, FlatList } from 'react-native';
import orders from '../../../assets/data/orders.json';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/BasketItem';

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
        <View style={{flex: 1}}>

            <View style={{
                flexDirection: 'row', 
                alignItems: 'center', 
                marginHorizontal: 10, 
                marginVertical: 30,
                }}
            >
                <Image 
                    source={{ uri: order.Restaurant.image }} 
                    style={{ 
                        width: 50, 
                        aspectRatio: 1/1, 
                        borderRadius: 50, 
                        marginRight: 10 
                        }} 
                />
                <View>
                    <Text 
                        style={{fontWeight: '600', fontSize: 16}}>
                        {order.Restaurant.name}
                    </Text>

                    <Text style={styles.status}>
                    Pedido nº {order.id} &#8226; 22/12/2022 às 12:00
                    </Text>

                    <Text style={{color: '#B22222', fontSize: 12, fontWeight: 'bold'}}>
                        Ver cardápio
                    </Text>
                </View>
            </View>

            <Text style={styles.subtitle}>
                Seus pedidos
            </Text>

        </View>
    </View>
  )
}

const OrderDetailsFooter = () => {
    return (
      <View style={{ marginBottom: 10 }}>
        {/* Separation */}
        <View
          style={{
            height: 1,
            width: "90%",
            backgroundColor: "lightgray",
            marginHorizontal: "5%",
            marginTop: 30,
          }}
        ></View>
        <Text style={{ margin: 10, fontSize: 14, fontWeight: "600" }}>
          Resumo de valores
        </Text>

        <View style={styles.row}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Subtotal
          </Text>
          <Text style={styles.value}>R$ 55,00</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Cupom de desconto</Text>
          <Text style={styles.value}>- R$ 5,00</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Taxa de entrega</Text>
          <Text style={styles.value}>Grátis</Text>
        </View>

        <View style={styles.row}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Total
          </Text>
          <Text style={styles.value}>R$ 50,00</Text>
        </View>

        <View
          style={{
            height: 1,
            width: "90%",
            backgroundColor: "lightgray",
            marginHorizontal: "5%",
            marginTop: 30,
          }}
        ></View>

        <View style={styles.row}>
          <Text style={{ margin: 10, fontSize: 14, fontWeight: "600" }}>
            Pago pelo cliente
          </Text>
          <Text style={styles.value}>R$ 50,00</Text>
        </View>

        <View
          style={{
            height: 1,
            width: "90%",
            backgroundColor: "lightgray",
            marginHorizontal: "5%",
            marginTop: 30,
          }}
        ></View>

        <View style={{ margin: 10 }}>
          <Text style={styles.label}>Endereço de entrega</Text>
          <Text style={styles.label}>
            Rua das Flores, 123 - Jardim das Flores
          </Text>
        </View>
      </View>
    );
}

const OrderDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={OrderDetailsHeader}
                ListFooterComponent={OrderDetailsFooter}
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
        fontSize: 12,
        fontWeight: '500',
        color: 'gray',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 18,
        letterSpacing: 0.7,
        fontWeight: '600',
        marginLeft: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
        color: 'gray',
    },
    value: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
    },
})

export default OrderDetailsScreen