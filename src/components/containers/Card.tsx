import { View } from "react-native";
import React, { PropsWithChildren, useContext } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <View className="justify-center items-center px-8 py-12 w-full rounded-lg opacity-75 bg-yellow-700">
      {children}
    </View>
  );
}
