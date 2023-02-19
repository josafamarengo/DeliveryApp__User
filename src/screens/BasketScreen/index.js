import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import BasketItem from "../../components/BasketItem";
import { useNavigation } from "@react-navigation/native";

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
    return (quantity * dish.price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const navigation = useNavigation();
  const goBack = () => navigation.navigate("Restaurant", { id: restaurant.id });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>

      <Text style={styles.subtitle}>Seus pedidos</Text>

      <Text style={styles.separator} />

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketItem basketDish={item} />}
        style={{ marginBottom: 10 }}
      />

      <View style={styles.separator} />

      <View style={styles.row}>
        <Pressable
          style={styles.buttonBack}
          onPress={goBack}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </Pressable>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Finalizar compra</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 30,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    margin: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6e6969",
    marginVertical: 10,
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#e2e2e2",
  },
  button: {
    backgroundColor: "#e47911",
    paddingVertical: 14,
    width: "66%",
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonBack: {
    backgroundColor: "#252525",
    paddingVertical: 14,
    width: "30%",
    borderRadius: 4,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
});

export default BasketScreen;
