import { View , Text, Image, StyleSheet, Pressable } from 'react-native';
import  { useNavigation }  from  '@react-navigation/native' ;
import { MaterialIcons } from '@expo/vector-icons';

const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Restaurant', {id: restaurant.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.restaurantItem}>
        <Image style={styles.restaurantImage} source={{ uri: restaurant.image}} />
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.restaurantInfo}>
          <View style={styles.deliveryInfo}>
            <MaterialIcons 
                name="delivery-dining" 
                size={24} 
                color="black"
            />
            <Text style={styles.deliveryFee}>
               {restaurant.deliveryFee.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})} •</Text>
            <Text style={styles.restaurantTime}>{restaurant.minDeliveryTime}- {restaurant.maxDeliveryTime} min</Text>
          </View>
          <View style={styles.ratingGroup}>
            <MaterialIcons
              name="star"
              color="black"
              size={18}
            />
            <Text style={styles.restaurantRating}>{restaurant.rating}</Text>
          </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  restaurantItem: {
    width: '100%',
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginVertical: 10,
  },
  restaurantImage: {
    width: '100%',
    aspectRatio: 5/3,
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: '600',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  restaurantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
  ratingGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantRating: {
    fontSize: 13,
    fontWeight: '600',
    color: '#777',
    marginRight: 20 ,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   deliveryFee: {
    fontSize: 13,
    fontWeight: '400',
    color: '#777',
    marginHorizontal: 5,
  },
  restaurantTime: {
    fontSize: 13,
    fontWeight: '400',
    color: '#777',
  },
})

export default RestaurantItem;