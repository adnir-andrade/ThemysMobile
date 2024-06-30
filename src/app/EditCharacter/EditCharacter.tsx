import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import EditForm from "./EditForm";

type Props = NativeStackScreenProps<RootStackParamList, "EditCharacter">;

export default function EditCharacter({ navigation, route }: Props) {
  const { character } = route.params;

  return (
    <Background>
      <Logo />

      <EditForm navigation={navigation} route={route} character={character} />
    </Background>
  );
}
