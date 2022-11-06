import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DishDetailsScreen from '../../screens/DishDetailsScreen';

const DishListItem = ({ dish }) => {

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
            <Text style={styles.price}>{dish.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
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
        fontSize: 16,
        fontWeight: '600',
    },
    description: {
        color: 'gray',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginLeft: 10,
    },
});

export default DishListItem