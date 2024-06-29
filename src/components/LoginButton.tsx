import React from "react";
import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type FormInput = {} & TouchableOpacityProps;

export default function LoginButton({ ...rest }: FormInput) {
  return (
    <TouchableOpacity className="mt-4" {...rest}>
      <ImageBackground
        source={require("../../assets/images/login-button.png")}
        className="h-16"
        resizeMode="contain"
      ></ImageBackground>
    </TouchableOpacity>
  );
}
