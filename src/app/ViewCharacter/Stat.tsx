import { View, Text } from "react-native";
import React from "react";

type Prop = {
  stat: string;
  value: number;
};

export default function Stat({ stat, value }: Prop) {
  return (
    <View className="my-2 border-solid border-2 border-gray-300 rounded-2xl p-2 items-center">
      <View>
        <Text className="text-xl text-white font-extrabold">{stat}</Text>
      </View>
      <View>
        <Text className="text-xl text-white font-semibold">{value}</Text>
      </View>
    </View>
  );
}
