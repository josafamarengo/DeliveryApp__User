import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { formatValue } from '../../utils/formatValues';

const DishListItem = ({ dish }) => {

  const dispatch = useDispatch();

  const navigation = useNavigation();

  return (
    <Pressable 
        onPress={() => 
            navigation.navigate('Dish', 
            { id: dish.id })} 
        style={styles.container}>
        <View style={{flex: 1}}>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.price}>
                {formatValue(dish.price)}
            </Text>
        </View>
        {dish.image && (<Image style={styles.image} source={{ uri: dish.image }} />
        )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
    },
    description: {
        color: 'gray',
        marginVertical: 5,
        fontSize: 12,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    image: {
        width: 80,
        aspectRatio: 1,
        borderRadius: 10,
        marginLeft: 10,
    },
});

export default DishListItem