import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {} & TouchableOpacityProps;

export default function DeleteButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Ionicons name="trash-sharp" size={24} color="red" />
    </TouchableOpacity>
  );
}
