import { View, TextInput, TextInputProps } from "react-native";
import React from "react";

type Props = {
  title?: string;
  color?: string;
} & TextInputProps;

export default function HeaderInput({ title, color, ...rest }: Props) {
  const textStyle = "text-4xl font-semibold text-center capitalize " + color;
  return (
    <View className="pt-20 mb-20 absolute top-0 left-0 right-0">
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
