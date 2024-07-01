import { View } from "react-native";
import React from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import CharacterList from "./CampaignList";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import Navbar from "../../components/ui/Navbar";
import CampaignList from "./CampaignList";

type Props = NativeStackScreenProps<RootStackParamList, "SelectCharacter">;

export default function SelectCampaign({ navigation, route }: Props) {
  return (
    <Background>
      <Navbar />
      <View className="justify-center">
        {/* <Logo /> */}
        <Header title="Characters" color="text-epic" className="mt-20 mb-10" />
        <CampaignList navigation={navigation} route={route} />
      </View>
    </Background>
  );
}
