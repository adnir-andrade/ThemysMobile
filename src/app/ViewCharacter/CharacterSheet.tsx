import { View, Text } from "react-native";
import React from "react";
import { Character } from "../../types/Character";
import Stat from "./Stat";

type Props = {
  character: Character;
};

export default function CharacterSheet({ character }: Props) {
  return (
    <View className="mt-36">
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
      <View className="flex flex-row justify-between items-center mb-12">
        <Stat stat="STR" value={character.strength} />
        <Stat stat="DEX" value={character.dexterity} />
        <Stat stat="CON" value={character.constitution} />
        <Stat stat="INT" value={character.intelligence} />
        <Stat stat="WIS" value={character.wisdom} />
        <Stat stat="CHA" value={character.charisma} />
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
