import { View, Text } from "react-native";
import React from "react";

type Prop = {
  stat: string;
  value: number;
};

export default function Stat({ stat, value }: Prop) {
  return (
    <View className="mt-2 mb-2 border-solid border-2 border-gray-300 rounded-2xl p-4 items-center">
      <View>
        <Text>{stat}</Text>
      </View>
      <View>
        <Text>{value}</Text>
      </View>
    </View>
  );
}
