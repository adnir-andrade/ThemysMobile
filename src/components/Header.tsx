import { View, Text, ViewProps } from "react-native";
import React from "react";

type Props = {
  title: string;
  color?: string;
} & ViewProps;

export default function Header({ title, color, ...rest }: Props) {
  const textStyle = "text-4xl font-semibold text-center capitalize " + color;
  return (
    <View {...rest}>
      <Text className={textStyle}>{title}</Text>
    </View>
  );
}
