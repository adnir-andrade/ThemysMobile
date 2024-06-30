import { View, TextInput, TextInputProps } from "react-native";
import React from "react";

type Props = {
  title?: string;
  color?: string;
  mb?: string;
} & TextInputProps;

export default function HeaderInput({
  title,
  color,
  mb = "20",
  ...rest
}: Props) {
  const textStyle = "text-4xl font-semibold text-center capitalize " + color;
  return (
    <View className={`mb-${mb}`}>
      <TextInput
        className={textStyle}
        placeholder="Insert name here"
        placeholderTextColor="#CFBE86"
        {...rest}
      >
        {title}
      </TextInput>
    </View>
  );
}
