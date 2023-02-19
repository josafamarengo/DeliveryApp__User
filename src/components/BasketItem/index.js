import { View, Text, StyleSheet } from 'react-native';
import { formatValue } from '../../utils/formatValues';

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
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.dishPrice}>
          {formatValue(basketDish.price)}
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
    marginTop: 30,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
    },
    quantity: {
        fontSize: 14,
        fontWeight: '600',
    },
    dishInfo: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    dishName: {
        fontSize: 14,
        fontWeight: '600',
    },
    dishDescription: {
        fontSize: 12,
        fontWeight: '400',
        color: '#6e6969',
    },
    priceContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
    },
    dishPrice: {
        fontSize: 14,
        fontWeight: '600',
    },
});

export default BasketItem;