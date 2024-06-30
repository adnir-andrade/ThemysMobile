import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import EditForm from "./EditForm";
import ImageButton from "../../components/ImageButton";

type Props = NativeStackScreenProps<RootStackParamList, "ViewCharacter">;

export default function EditCharacter({ navigation, route }: Props) {
  const { character } = route.params;

  console.log(character);
  const handleConfig = () => {
    console.log("Click Click I am goddamn hungry!");
  };

  return (
    <Background>
      <View className="flex-1">
        <Logo />
        <Header
          title={`${character.name}`}
          color="text-orange-300"
          className="mt-20"
        />
        <EditForm character={character} />
        <ImageButton
          imageName="config"
          className="mt-20 place-self-end self-center"
          onPress={handleConfig}
        />
      </View>
    </Background>
  );
}
