import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getStatsAcronym } from "../../constants/Stats";
import StatLine from "./StatLine";
import ImageButton from "../../components/ImageButton";
import { Character } from "../../types/Character";

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

export default function Step3({ character, updateCharacter }: Props) {
  const stats = getStatsAcronym();
  const [str, setStr] = useState(character.strength);
  const [dex, setDex] = useState(character.dexterity);
  const [con, setCon] = useState(character.constitution);
  const [int, setInt] = useState(character.intelligence);
  const [wis, setWis] = useState(character.wisdom);
  const [cha, setCha] = useState(character.charisma);
  const [selectedStat, setSelectedStat] = useState(stats[0]);

  useEffect(() => {
    updateCharacter({
      strength: str!,
      dexterity: dex!,
      constitution: con!,
      intelligence: int!,
      wisdom: wis!,
      charisma: cha!,
    });
  }, [setStr, setDex, setCon, setInt, setWis, setCha]);

  const handleDice = () => {
    console.log("I am so tired");
  };

  const handleReset = () => {
    console.log("I am so tired");
  };

  const handleDecrease = () => {
    console.log("Should decrease");
  };

  const handleIncrease = () => {
    console.log("Should increase");
  };

  const handleSelect = (index: number) => {
    setSelectedStat(stats[index]);
  };

  return (
    <View>
      <View className="flex flex-row mb-6">
        <View className="flex-1">
          <ImageButton
            imageName="dice"
            className="self-center"
            onPress={handleDice}
          />
        </View>
        <View className="flex-1">
          <Text className="text-center">0</Text>
        </View>
        <View className="flex-1">
          <ImageButton
            imageName="reset"
            className="self-center"
            onPress={handleReset}
          />
        </View>
      </View>
      <ScrollView className="p-4">
        {stats.map((stat, index) => (
          <StatLine
            onPress={() => handleSelect(index)}
            key={index}
            stat={stat}
          />
        ))}
      </ScrollView>
      <View className="flex flex-row mb-6 px-12 items-center">
        <View className="flex-1">
          <ImageButton
            imageName="arrowDown"
            className="self-center"
            onPress={handleDecrease}
          />
        </View>
        <View className="flex-1">
          <Text className="text-4xl font-medium text-center">
            {selectedStat}
          </Text>
        </View>
        <View className="flex-1">
          <ImageButton
            imageName="arrowUp"
            className="self-center"
            onPress={handleIncrease}
          />
        </View>
      </View>
    </View>
  );
}
