import { View, Text } from "react-native";
import React from "react";
import { Character } from "../../types/Character";
import Stat from "./Stat";

type Props = {
  character: Character;
};

export default function CharacterSheet({ character }: Props) {
  return (
    <View>
      <Text>
        {character.gender} {character.race}
      </Text>
      <Text>
        Level {character.level} {character.klass}
      </Text>
      <View className="flex flex-row justify-between items-center">
        <Stat stat="STR" value={character.strength} />
        <Stat stat="DEX" value={character.dexterity} />
        <Stat stat="CON" value={character.constitution} />
        <Stat stat="INT" value={character.intelligence} />
        <Stat stat="WIS" value={character.wisdom} />
        <Stat stat="CHA" value={character.charisma} />
      </View>
      <Text>HP: {character.hp}</Text>
      <Text>{character.background}</Text>
    </View>
  );
}
