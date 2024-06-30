import { TouchableOpacity, Image, TouchableOpacityProps } from "react-native";
import React from "react";

type Props = {
  imageName: keyof typeof imagePaths;
  size?: string;
} & TouchableOpacityProps;

const imagePaths = {
  chevronRight: require("../../assets/images/chevrons-right.png"),
  chevronLeft: require("../../assets/images/chevrons-left.png"),
  arrowDown: require("../../assets/images/arrow-down.png"),
  arrowUp: require("../../assets/images/arrow-up.png"),
  dice: require("../../assets/images/dice.png"),
  config: require("../../assets/images/settings.png"),
  reset: require("../../assets/images/reset.png"),
  add: require("../../assets/images/add.png"),
  login: require("../../assets/images/login.png"),
};

export default function ImageButton({
  imageName,
  size = "16",
  ...rest
}: Props) {
  const style = `h-${size}`;
  return (
    <TouchableOpacity {...rest}>
      <Image
        source={imagePaths[imageName]}
        className={style}
        resizeMode="contain"
      ></Image>
    </TouchableOpacity>
  );
}
