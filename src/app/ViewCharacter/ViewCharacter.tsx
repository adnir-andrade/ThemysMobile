import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import CharacterSheet from "./CharacterSheet";
import ConfigButton from "../../components/ConfigButton";

type Props = NativeStackScreenProps<RootStackParamList, "ViewCharacter">;

export default function ViewCharacter({ navigation, route }: Props) {
  const { character } = route.params;

  const handleConfig = () => {
    console.log("Click Click I am goddamn hungry!");
  };

  return (
    <Background>
      <View className="flex-1">
        <Logo />
        <Header title={`${character.name}`} color="text-orange-300" />
        <CharacterSheet character={character} />
        <ConfigButton className="mt-20 place-self-end" onPress={handleConfig} />
      </View>
    </Background>
  );
}
