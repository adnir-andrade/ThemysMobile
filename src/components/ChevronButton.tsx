import { TouchableOpacity, Image, TouchableOpacityProps } from "react-native";
import React from "react";

type Props = {
  direction: "right" | "left";
} & TouchableOpacityProps;

export default function ChevronButton({ direction, ...rest }: Props) {
  const chevronImage =
    direction === "right"
      ? require("../../assets/images/chevrons-right.png")
      : require("../../assets/images/chevrons-left.png");
  return (
    <TouchableOpacity {...rest}>
      <Image
        source={chevronImage}
        style={{ width: 64, height: 64 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
