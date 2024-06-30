import { View, TextInput, TextInputProps } from "react-native";
import React from "react";

type Props = {
  title?: string;
  color?: string;
} & TextInputProps;

export default function HeaderInput({ title, color, ...rest }: Props) {
  const textStyle = "text-4xl font-semibold text-center capitalize " + color;
  return (
    <View className="mb-20">
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
