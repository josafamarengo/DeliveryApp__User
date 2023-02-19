import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { formatValue } from "../../utils/formatValues";

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
    return (quantity * dish.price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: dish.image }} />
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>{ formatValue(dish.price)}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <View style={styles.quantityGroup}>
          <AntDesign
            name="minuscircleo"
            size={30}
            color="black"
            onPress={onMinus}
          />
          <Text style={styles.quantity}>{quantity}</Text>
          <AntDesign
            name="pluscircleo"
            size={30}
            color="black"
            onPress={onPlus}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Basket")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Adicionar  {getTotalPrice()}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6e6969",
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#e2e2e2",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  quantityGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "#e47911",
    paddingVertical: 20,
    width: "60%",
    alignItems: "center",
    marginTop: "auto",
    alignSelf: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default DishDetailsScreen;
