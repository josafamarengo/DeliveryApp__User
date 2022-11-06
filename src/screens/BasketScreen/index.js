import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import BasketItem from '../../components/BasketItem';

const restaurant = restaurants[0];

const BasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotalPrice = () => {
    return (quantity * dish.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>

        <Text style={styles.subtitle}>Seus pedidos</Text>

        <Text style={styles.separator} />

        <FlatList 
          data={restaurant.dishes} 
          renderItem={({ item }) => (
          <BasketItem basketDish={item} />
        )} />

        <View style={styles.separator} />

        <View style={styles.button}>
          <Text style={styles.buttonText}>Finalizar compra</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    margin: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6e6969',
    marginVertical: 10,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#e2e2e2',
  },
  button: {
    backgroundColor: '#e47911',
    paddingVertical: 20,
    width: '95%',
    alignItems: 'center',
    marginTop: 'auto',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BasketScreen;