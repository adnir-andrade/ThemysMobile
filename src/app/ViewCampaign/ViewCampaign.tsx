import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import Navbar from "../../components/ui/Navbar";
import PlayerList from "./PlayersList";

type Props = NativeStackScreenProps<RootStackParamList, "SelectCampaign">;

export default function ViewCampaign({ navigation, route }: Props) {
  return (
    <Background>
      <Navbar />
      <View className="justify-center">
        {/* <Logo /> */}
        <Header title="Players" color="text-epic" className="mt-20 mb-10" />
        <PlayerList navigation={navigation} route={route} />
      </View>
    </Background>
  );
}
