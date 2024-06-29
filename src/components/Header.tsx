import { View, Text } from "react-native";
import React from "react";

type Header = {
  title: string;
};

export default function Header({ title }: Header) {
  return (
    <View className="pt-20 mb-20 absolute top-0 left-0 right-0">
      <Text className="text-4xl text-center">{title}</Text>
    </View>
  );
}
