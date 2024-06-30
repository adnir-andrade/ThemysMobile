import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import { acronymToAttribute } from "../../constants/Stats";

type Props = {
  stat: string;
  total: number;
} & TouchableOpacityProps;

export default function StatLine({ stat, total, ...rest }: Props) {
  const [mod, setMod] = useState<number>(0);

  useEffect(() => {
    setMod(Math.floor((total - 10) / 2));
  }, [total]);

  return (
    <View className="flex flex-row mb-6">
      <View className="flex-1">
        <TouchableOpacity {...rest}>
          <Text className="text-center text-xl">{stat}</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1">
        <Text className="text-center text-xl">{total}</Text>
      </View>
      <View className="flex-1">
        <Text className="text-center text-xl">{mod}</Text>
      </View>
    </View>
  );
}
