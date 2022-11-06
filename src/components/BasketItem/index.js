import { View, Text, StyleSheet } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';

const BasketItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>

      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>1</Text>
      </View>

      <View style={styles.dishInfo}>
        <Text style={styles.dishName}>
          {basketDish.name}
        </Text>

        <Text style={styles.dishDescription}>
          {basketDish.description}
        </Text>

        <Text style={styles.dishPrice}>
          {basketDish.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f3f3f3',
        borderRadius: 10,
        width: 60,
        height: 50,
        marginLeft: 10,
    },
    quantity: {
        fontSize: 18,
        fontWeight: '600',
    },
    dishInfo: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
    },
    dishName: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
    },
    dishDescription: {
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 10,
        color: '#6e6969',
    },
    dishPrice: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        color: '#e47911',
    },
});

export default BasketItem;