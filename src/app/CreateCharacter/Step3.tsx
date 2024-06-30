import { View, Text, ScrollView } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getStatsAcronym } from "../../constants/Stats";
import StatLine from "./StatLine";
import ImageButton from "../../components/ImageButton";
import { Character } from "../../types/Character";
import { useCharacter } from "../../hooks/useCharacter";

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
  const { getModValue } = useCharacter();
  const stats = getStatsAcronym();
  const [str, setStr] = useState<number>(character.strength);
  const [dex, setDex] = useState<number>(character.dexterity);
  const [con, setCon] = useState<number>(character.constitution);
  const [int, setInt] = useState<number>(character.intelligence);
  const [wis, setWis] = useState<number>(character.wisdom);
  const [cha, setCha] = useState<number>(character.charisma);
  const [selectedStat, setSelectedStat] = useState<string>(stats[0]);
  const [pointsLeft, setPointsLeft] = useState<number>(
    character.points_to_spend
  );

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
      points_to_spend: pointsLeft,
      hp: 10 + getModValue(con) + character.level * 5,
    });
  }, [str, dex, con, int, wis, cha, pointsLeft]);

  const handleDice = () => {
    const standardArray = [8, 10, 12, 13, 14, 15];
    const getRandomIndex = (numbers: number[]): number => {
      return Math.floor(Math.random() * numbers.length);
    };
    for (const stat of stats) {
      const index = getRandomIndex(standardArray);
      setAcronym[stat](standardArray.splice(index, 1)[0]);
    }
    setPointsLeft(0);
  };

  const handleReset = () => {
    stats.forEach((stat) => setAcronym[stat](8));
    setPointsLeft(27);
  };

  const handleDecrease = () => {
    const statValue = varAcronym[selectedStat];
    const statSetter = setAcronym[selectedStat];
    const pointCost = statValue < 14 ? 1 : 2;

    if (statValue > 8) {
      statSetter(statValue - 1);
      setPointsLeft(pointsLeft + pointCost);
    }
  };

  const handleIncrease = () => {
    const statValue = varAcronym[selectedStat];
    const statSetter = setAcronym[selectedStat];
    const pointCost = statValue < 13 ? 1 : 2;

    if (statValue < 15 && pointsLeft - pointCost >= 0) {
      statSetter(statValue + 1);
      setPointsLeft(pointsLeft - pointCost);
    }
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
          <Text className="text-center text-4xl">{pointsLeft}</Text>
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
