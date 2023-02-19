import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 1,
    marginTop: 20,
  },
  iconContainer: {
    position: "absolute",
    top: 30,
    left: 10,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: 40,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    margin: 10,
  },
  deliveryInfo: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  menuTitle: {
    fontSize: 16,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    fontWeight: "300",
    marginTop: 20,
    marginLeft: 10,
  },
});