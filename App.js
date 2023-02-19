import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
