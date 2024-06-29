import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type Props = {} & TouchableOpacityProps;

export default function EditButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Ionicons name="pencil" size={24} color="black" />
    </TouchableOpacity>
  );
}
