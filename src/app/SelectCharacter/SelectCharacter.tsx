import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import CharacterList from "./CharacterList";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "SelectCharacter">;

export default function SelectCharacter({ navigation, route }: Props) {
  return (
    <Background>
      <View className="flex-1 justify-center">
        {/* <Logo /> */}
        <Header title="Select a Character" />
        <CharacterList navigation={navigation} route={route} />
      </View>
    </Background>
  );
}
