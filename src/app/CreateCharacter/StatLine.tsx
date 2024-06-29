import { View, Text } from "react-native";
import React from "react";

type Props = {
  stat: string;
};

export default function StatLine({ stat }: Props) {
  return (
    <View className="flex flex-row mb-6">
      <View className="flex-1">
        <Text className="text-center">{stat}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-center">10</Text>
      </View>
      <View className="flex-1">
        <Text className="text-center">0</Text>
      </View>
    </View>
  );
}