import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { skills } from "../../constants/Skills";
import RadioBoxButton from "../../components/RadioBoxButton";
import { Character } from "../../types/Character";

type SkillItem = {
  id: number;
  name: string;
  isChecked: boolean;
};

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

export default function Step4({ character, updateCharacter }: Props) {
  const initialSkillsState: SkillItem[] = skills.map((skill, index) => ({
    id: index,
    name: skill,
    isChecked: character.skills!.includes(skill),
  }));

  const [skillsState, setSkillsState] =
    useState<SkillItem[]>(initialSkillsState);
  const [chosenSkills, setChosenSkills] = useState<string[]>([]);

  useEffect(() => {
    const skills = skillsState.filter((skill) => skill.isChecked);
    const skillsName = skills.map((skill) => skill.name);
    setChosenSkills(skillsName);
  }, [skillsState]);

  useEffect(() => {
    updateCharacter({
      skills: chosenSkills,
    });
  }, [chosenSkills]);

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
          <Text className="text-lg font-medium text-yellow-500">
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
        Skills
      </Text>

      <Text className="text-xl mb-2 font-medium text-yellow-300 pt-8 px-2">
      <FlatList
        className="mx-4 mb-32"
        data={skillsState}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
