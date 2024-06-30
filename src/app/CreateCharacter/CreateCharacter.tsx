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
import HeaderInput from "../../components/HeaderInput";
import ImageButton from "../../components/ImageButton";
import { createCharacter } from "../../services/characterService";

type Props = {} & NativeStackScreenProps<RootStackParamList, "CreateCharacter">;

export default function CreateCharacter({ navigation }: Props) {
  const [step, setStep] = useState(1);
  const { character, updateCharacter, isCharacterValid } = useCharacter();
  const [name, setName] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

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
        return (
          <Step3 character={character} updateCharacter={updateCharacter} />
        );
      case 4:
        return (
          <Step4 character={character} updateCharacter={updateCharacter} />
        );
      case 5:
        return (
          <Step5 character={character} updateCharacter={updateCharacter} />
        );
      default:
        return (
          <Step1 character={character} updateCharacter={updateCharacter} />
        );
    }
  };

  useEffect(() => {
    updateCharacter({
      name: name,
    });
  }, [name]);

  useEffect(() => {
    if (isCharacterValid()) {
      setIsValid(true);
      return;
    }

    setIsValid(false);
  }, [character]);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleAdd = () => {
    const submitCharacter = async () => {
      try {
        const response = await createCharacter(character);
        console.log(response);
      } catch (error) {
        console.error("Error trying to create a new character:", error);
      } finally {
        navigation.reset({
          index: 0,
          routes: [{ name: "SelectCharacter" }],
        });
      }
    };

    submitCharacter();
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
              <ChevronButton direction="left" className="opacity-25" />
            )}
            {isValid ? (
              <ImageButton imageName="add" onPress={handleAdd} />
            ) : (
              <ImageButton imageName="add" className="opacity-25" />
            )}
            {step < 5 ? (
              <ChevronButton direction="right" onPress={handleNext} />
            ) : (
              <ChevronButton direction="right" className="opacity-25" />
            )}
          </View>
        </View>
      </View>
    </Background>
  );
}
