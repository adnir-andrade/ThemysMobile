import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "CreateCharacter">;

export default function CreateCharacter({ navigation }: Props) {
  const handleConfig = () => {
    console.log("Click Click I am goddamn hungry!");
  };

  return (
    <Background>
      <View className="flex-1">
        <Logo />
        <Header title="Create a Character" color="text-orange-300" />
      </View>
    </Background>
  );
}
