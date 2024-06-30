import { View, Text } from "react-native";
import React from "react";
import { Character } from "../../types/Character";

type Props = {
  character: Character;
};

export default function EditForm({ character }: Props) {
  return (
    <View className="mt-16">
      <View className="justify-start items-center mb-12">
        <Text className="text-3xl text-white font-semibold">
          {character.gender} {character.race}
        </Text>
        <Text>
          <Text className="text-2xl text-white">Level {character.level} </Text>
          <Text className="text-2xl text-white font-semibold">
            {character.klass}
          </Text>
        </Text>
        <Text className="text-lg text-white font-semibold">
          HP: {character.hp}
        </Text>
      </View>

      <View className="px-7 mx-4 bg-black/50 py-8 rounded-xl">
        <Text className="text-2xl text-white font-semibold">Background</Text>
        <Text className="text-xl text-white font-medium">
          {character.background}
        </Text>
      </View>
    </View>
  );
}
