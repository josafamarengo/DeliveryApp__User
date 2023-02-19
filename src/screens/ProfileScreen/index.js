import { View, Text, Image } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: '100%',
          height: 60,
          position: "relative",
        }}
      >
        <Image
          source={{ uri: "https://github.com/josafamarengo.png" }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            resizeMode: "contain",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginHorizontal: "auto"
          }}
        >
          Josafá Marengo
        </Text>
      </View>
    </View>
  );
}
