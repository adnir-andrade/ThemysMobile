import { View, Text } from "react-native";
import React from "react";
import { Character } from "../../types/Character";
import Stat from "../ViewCharacter/Stat";
import Header from "../../components/Header";

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

const skillToString = (skills: string[]) => {
  let str = "";
  for (let i = 0; i < skills.length; i++) {
    str += `${skills[i]}`;
    if (i < skills.length - 1) str += ", ";
  }

  return str;
};

export default function Step5({ character, updateCharacter }: Props) {
  return (
    <>
      <Text className="text-xl font-medium text-yellow-300 pt-2 px-2">
        Summary
      </Text>
      <View className="mt-4 items-center">
        <Header title={character.name} color="text-epic" className="mb-4" />
        <View className="justify-start items-center mb-3">
          <Text className="text-3xl text-white font-semibold">
            {character.gender} {character.race}
          </Text>
          <Text>
            <Text className="text-2xl text-white">
              Level {character.level}{" "}
            </Text>
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

        <View className="px-7 mx-4 bg-black/50 py-8 w-full h-40 rounded-xl">
          <Text className="text-2xl text-white font-semibold">Skills</Text>
          <Text className="text-xl text-white font-medium">
            {skillToString(character.skills!)}
          </Text>
        </View>
      </View>
    </>
  );
}
