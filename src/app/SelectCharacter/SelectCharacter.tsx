import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import CharacterList from "./CharacterList";

export default function SelectCharacter() {
  return (
    <Background>
      <View className="flex-1 justify-center">
        {/* <Logo /> */}
        <Header title="Select a Character" />
        <CharacterList />
      </View>
    </Background>
  );
}
