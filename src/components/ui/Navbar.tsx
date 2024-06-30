import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <View className="absolute top-0 inset-x-0 top-0 h-16 bg-black/80 rounded-b-md h-22 z-10 ">
      <Avatar />
    </View>
  );
}
