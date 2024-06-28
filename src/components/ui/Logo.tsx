import { View, Image } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View className="absolute self-center opacity-30">
      <Image source={require("../../../assets/images/logo.png")} />
    </View>
  );
}
