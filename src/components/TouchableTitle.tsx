import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type Props = {
  title: string;
} & TouchableOpacityProps;

export default function TouchableTitle({ title, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Text className="italic text-3xl pl-5 font-bold text-amber-200 underline decoration-amber-900/50 capitalize">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
