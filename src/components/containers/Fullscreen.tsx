import { View } from "react-native";
import React, { ReactNode } from "react";

type FullScreenProps = {
  children: ReactNode;
};

export default function FullScreen({ children }: FullScreenProps) {
  return <View className="flex-1 justify-center items-center">{children}</View>;
}
