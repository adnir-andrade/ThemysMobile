import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

type Props = {} & TouchableOpacityProps;

export default function AddButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <ImageBackground
        source={require("../../assets/images/add.png")}
        className="h-16"
        resizeMode="contain"
      ></ImageBackground>
    </TouchableOpacity>
  );
}
