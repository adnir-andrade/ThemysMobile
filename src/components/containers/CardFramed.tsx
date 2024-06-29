import { View } from "react-native";
import React, { PropsWithChildren } from "react";

export default function CardFramed({ children }: PropsWithChildren) {
  return (
    <View className="mt-2 mb-8 border-solid border-2 border-gray-300 rounded-2xl p-4">
      {children}
    </View>
  );
}
