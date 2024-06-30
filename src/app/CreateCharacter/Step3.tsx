import { View, Text, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getStatsAcronym } from "../../constants/Stats";
import StatLine from "./StatLine";
import ImageButton from "../../components/ImageButton";
import { Character } from "../../types/Character";

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

type setAcronymType = {
  [key: string]: Dispatch<SetStateAction<number>>;
};

type varAcronymType = {
  [key: string]: number;
};

export default function Step3({ character, updateCharacter }: Props) {
  const stats = getStatsAcronym();
  const [str, setStr] = useState<number>(character.strength);
  const [dex, setDex] = useState<number>(character.dexterity);
  const [con, setCon] = useState<number>(character.constitution);
  const [int, setInt] = useState<number>(character.intelligence);
  const [wis, setWis] = useState<number>(character.wisdom);
  const [cha, setCha] = useState<number>(character.charisma);
  const [selectedStat, setSelectedStat] = useState<string>(stats[0]);

  const setAcronym: setAcronymType = {
    STR: setStr,
    DEX: setDex,
    CON: setCon,
    INT: setInt,
    WIS: setWis,
    CHA: setCha,
  };

  const varAcronym: varAcronymType = {
    STR: str,
    DEX: dex,
    CON: con,
    INT: int,
    WIS: wis,
    CHA: cha,
  };

  useEffect(() => {
    updateCharacter({
      strength: str!,
      dexterity: dex!,
      constitution: con!,
      intelligence: int!,
      wisdom: wis!,
      charisma: cha!,
    });
  }, [str, dex, con, int, wis, cha]);

  const handleDice = () => {
    console.log("Rolling dice...");
  };

  const handleReset = () => {
    console.log("Resetting stats...");
  };

  const handleDecrease = () => {
    if (varAcronym[selectedStat] > 1)
      setAcronym[selectedStat](varAcronym[selectedStat] - 1);
  };

  const handleIncrease = () => {
    if (varAcronym[selectedStat] < 20)
      setAcronym[selectedStat](varAcronym[selectedStat] + 1);
  };

  const handleSelect = (index: number) => {
    setSelectedStat(stats[index]);
  };

  return (
    <View>
      <View className="flex flex-row items-center mb-6">
        <View className="flex-1">
          <ImageButton
            imageName="dice"
            className="self-center"
            onPress={handleDice}
          />
        </View>
        <View className="flex-1">
          <Text className="text-center text-4xl">0</Text>
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
            total={varAcronym[stat]}
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
