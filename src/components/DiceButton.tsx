import { TouchableOpacity, Image, TouchableOpacityProps } from "react-native";
import React from "react";

type Props = {} & TouchableOpacityProps;

export default function DiceButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Image
        source={require("../../assets/images/dice.png")}
        className="h-16"
        resizeMode="contain"
      ></Image>
    </TouchableOpacity>
  );
}
