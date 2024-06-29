import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

type Props = {} & TouchableOpacityProps;

export default function ConfigButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <ImageBackground
        source={require("../../assets/images/settings.png")}
        className="h-16"
        resizeMode="contain"
      ></ImageBackground>
    </TouchableOpacity>
  );
}
