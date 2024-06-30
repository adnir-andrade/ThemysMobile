import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";

type Props = {
  stat: string;
} & TouchableOpacityProps;

export default function StatLine({ stat, ...rest }: Props) {
  return (
    <View className="flex flex-row mb-6">
      <View className="flex-1">
        <TouchableOpacity {...rest}>
          <Text className="text-center text-xl">{stat}</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <Text className="text-center text-xl">10</Text>
      </View>
      <View className="flex-1">
        <Text className="text-center text-xl">0</Text>
      </View>
    </View>
  );
}
