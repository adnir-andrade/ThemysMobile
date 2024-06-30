import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import ChevronButton from "../../components/ChevronButton";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useCharacter } from "../../hooks/useCharacter";
import { Character } from "../../types/Character";
import HeaderInput from "../../components/HeaderInput";

type Props = {} & NativeStackScreenProps<RootStackParamList, "CreateCharacter">;

export default function CreateCharacter({ navigation }: Props) {
  const [step, setStep] = useState(1);
  const { character, updateCharacter } = useCharacter();
  const [stepValues, setStepValues] = useState<Partial<Character>>({});
  const [name, setName] = useState<string>("");

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 character={character} updateCharacter={setStepValues} />;
      case 2:
        return <Step2 character={character} updateCharacter={setStepValues} />;
      case 3:
        return <Step3 character={character} updateCharacter={setStepValues} />;
      case 4:
        return <Step4 character={character} updateCharacter={setStepValues} />;
      case 5:
        return <Step5 character={character} updateCharacter={setStepValues} />;
      default:
        return <Step1 character={character} updateCharacter={setStepValues} />;
    }
  };

  useEffect(() => {
    updateCharacter({
      name: name,
    });
  }, [name]);

  const handleNext = () => {
    updateCharacter(stepValues);
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    updateCharacter(stepValues);
    if (step > 1) setStep(step - 1);
  };

  return (
    <Background>
      <View className="flex-1">
        <Logo />
        <HeaderInput color="text-orange-300" onChangeText={setName} />
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
