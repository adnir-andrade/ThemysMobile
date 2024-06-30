import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import ChevronButton from "../../components/ChevronButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useCharacter } from "../../hooks/useCharacter";

type Props = NativeStackScreenProps<RootStackParamList, "CreateCharacter">;

export default function CreateCharacter({ navigation }: Props) {
  const [step, setStep] = useState(1);
  const { character, updateCharacter } = useCharacter();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 character={character} updateCharacter={updateCharacter} />
        );
      case 2:
        return (
          <Step2 character={character} updateCharacter={updateCharacter} />
        );
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      default:
        return (
          <Step1 character={character} updateCharacter={updateCharacter} />
        );
    }
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Background>
      <View className="flex-1">
        <Logo />
        <Header title="Create a Character" color="text-orange-300" />
        <View className="flex-1 h-full bg-zinc-700/50 mt-40 mb-48 p-4 mx-8 rounded-b-3xl rounded-t-xl">
          <View className="justify-center">{renderStep()}</View>
          <View className="flex flex-row justify-between items-center absolute bottom-0 left-0 right-0">
            {step > 1 ? (
              <ChevronButton direction="left" onPress={handlePrev} />
            ) : (
              <Text />
            )}
            {step < 5 && (
              <ChevronButton direction="right" onPress={handleNext} />
            )}
          </View>
        </View>
      </View>
    </Background>
  );
}
