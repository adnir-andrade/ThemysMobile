import { View, Text } from "react-native";
import React from "react";

type Header = {
  title: string;
  color?: string;
};

export default function Header({ title, color }: Header) {
  const textStyle = "text-4xl font-semibold text-center capitalize " + color;
  return (
    <View className="pt-20 mb-20 absolute top-0 left-0 right-0">
      <Text className={textStyle}>{title}</Text>
    </View>
  );
}
