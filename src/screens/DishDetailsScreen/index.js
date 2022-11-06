import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();

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
        <Text style={styles.title}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <View style={styles.separator} />
        <View style={styles.row}>
          <AntDesign name="minuscircleo" size={50} color="black" onPress={onMinus} />
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign name="pluscircleo" size={50} color="black" onPress={onPlus} />
        </View>
        <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar {quantity} ao carrinho &#8226; {getTotalPrice()}</Text>
        </Pressable>
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
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#6e6969',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#e2e2e2',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  quantity: {
    fontSize: 24,
    fontWeight: '600',
    marginHorizontal: 30,
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

export default DishDetailsScreen;