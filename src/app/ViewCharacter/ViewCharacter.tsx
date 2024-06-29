import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "ViewCharacter">;

export default function ViewCharacter({ navigation, route }: Props) {
  const { character } = route.params;

  console.log(character);

  return (
    <Background>
      <View className="flex-1 justify-center">
        {/* <Logo /> */}
        <Header title="View Character" />
      </View>
    </Background>
  );
}
