import { View , Text, Image, StyleSheet, Pressable } from 'react-native';
import  { useNavigation }  from  '@react-navigation/native' ;
import { MaterialIcons } from '@expo/vector-icons';
import { formatValue } from '../../utils/formatValues';

const RestaurantItem = ({restaurant}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Restaurant', {id: restaurant.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.restaurantItem}>
      <Image
        style={styles.restaurantImage}
        source={{ uri: restaurant.image }}
      />
      <View>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <View style={styles.restaurantInfo}>
          <View style={styles.ratingGroup}>
            <MaterialIcons name="star" color="#e47911" size={18} />
            <Text
              style={{
                color: "#e47911",
                fontWeight: "600",
                fontSize: 12,
              }}
            >
              {restaurant.rating}
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 12,
              }}
            >
              {" "}
              • Pizza • 3km
            </Text>
          </View>
          <View style={styles.deliveryInfo}>
            <MaterialIcons name="delivery-dining" size={24} color="black" />
            <Text style={styles.deliveryFee}>
              {formatValue(restaurant.deliveryFee)} •
            </Text>
            <Text style={styles.restaurantTime}>
              {restaurant.minDeliveryTime}- {restaurant.maxDeliveryTime} min
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#00FF7F50",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <MaterialIcons
                name="local-offer"
                size={14}
                color="#228B22"
                style={{
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  color: "#228B22",
                  fontSize: 12,
                }}
              >
                Cupom de 20%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  restaurantItem: {
    width: '100%',
    overflow: 'hidden',
    marginVertical: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    aspectRatio: 1,
    borderRadius: 10,
    width: 100,
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 2,
    marginHorizontal: 15,
  },
  restaurantInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    marginBottom: 10,
  },
  ratingGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   deliveryFee: {
    fontSize: 12,
    fontWeight: '400',
    color: '#777',
    marginHorizontal: 5,
  },
  restaurantTime: {
    fontSize: 12,
    fontWeight: '400',
    color: '#777',
  },
})

export default RestaurantItem;