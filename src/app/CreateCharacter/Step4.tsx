import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { skills } from "../../constants/Skills";
import RadioBoxButton from "../../components/RadioBoxButton";

type SkillItem = {
  id: number;
  name: string;
  isChecked: boolean;
};

export default function Step4() {
  const initialSkillsState: SkillItem[] = skills.map((skill, index) => ({
    id: index,
    name: skill,
    isChecked: false,
  }));

  const [skillsState, setSkillsState] =
    useState<SkillItem[]>(initialSkillsState);

  const toggleEnabled = (id: number) => {
    setSkillsState((prevSkills) => {
      const quantityChecked = prevSkills.filter(
        (skill) => skill.isChecked
      ).length;

      if (quantityChecked === 3 && !prevSkills[id].isChecked) return prevSkills;

      return prevSkills.map((skill) =>
        skill.id === id ? { ...skill, isChecked: !skill.isChecked } : skill
      );
    });
  };

  const renderItem = ({ item }: { item: SkillItem }) => (
    <>
      <View className="flex flex-row justify-between items-center">
        <View className="flex-1">
          <Text className="text-lg font-medium text-yellow-400">
            {item.name}
          </Text>
        </View>
        <View className="flex-1 ">
          <RadioBoxButton
            isChecked={item.isChecked}
            setIsChecked={() => toggleEnabled(item.id)}
            format="checkbox"
            className="flex-row items-center self-end"
          />
        </View>
      </View>
    </>
  );

  return (
    <View>
      <FlatList
        className="mx-4"
        data={skillsState}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
