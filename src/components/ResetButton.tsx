import { TouchableOpacity, Image, TouchableOpacityProps } from "react-native";
import React from "react";

type Props = {} & TouchableOpacityProps;

export default function ResetButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Image
        source={require("../../assets/images/reset.png")}
        className="h-16"
        resizeMode="contain"
      ></Image>
    </TouchableOpacity>
  );
}
