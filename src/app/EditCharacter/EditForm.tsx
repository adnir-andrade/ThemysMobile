import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Character } from "../../types/Character";
import HeaderInput from "../../components/HeaderInput";
import AttributeDropdown from "../CreateCharacter/AttributeDropdown";
import { genders } from "../../constants/Genders";
import ImageButton from "../../components/ImageButton";
import { editCharacter } from "../../services/characterService";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

type Props = {
  character: Character;
} & NativeStackScreenProps<RootStackParamList, "EditCharacter">;

export default function EditForm({ character, navigation }: Props) {
  const [newName, setNewName] = useState<string>(character.name);
  const [newGender, setNewGender] = useState<string | null>(
    character.gender ?? ""
  );
  const [newBackground, setNewBackground] = useState<string | null>(
    character.background ?? ""
  );

  const handleCancel = () => {};

  const handleAccept = async () => {
    await editCharacter(
      {
        name: newName,
        gender: newGender!,
        background: newBackground!,
      },
      character.id!
    );

    navigation.reset({
      index: 0,
      routes: [{ name: "SelectCharacter" }],
    });
  };

  return (
    <>
      <HeaderInput
        value={newName}
        onChangeText={setNewName}
        color="text-orange-300"
        className="pt-20"
        mb="4"
      />
      <View className="mb-2 px-8">
        <AttributeDropdown
          itemsList={genders}
          value={newGender}
          setValue={setNewGender}
          title="Gender"
          placeholder="Gender"
          zIndex={1000}
          zIndexInverse={2000}
          dropDownDirection="TOP"
        />
      </View>

      <View className="px-7 mx-4 bg-black/50 py-5 rounded-xl h-3/6">
        <Text className="text-2xl text-white font-semibold">Background</Text>
        <TextInput
          className="text-xl text-white font-medium text-pretty pb-1"
          cursorColor="#CFBE86"
          multiline={true}
          value={newBackground!}
          onChangeText={setNewBackground}
          placeholder="This is the epic story of..."
          placeholderTextColor="white"
        ></TextInput>
      </View>
      <View className="flex flex-row justify-between items-center absolute bottom-0 left-0 right-0 pb-32 px-20">
        <ImageButton imageName="cancel" onPress={handleCancel} />
        <ImageButton imageName="accept" onPress={handleAccept} />
      </View>
    </>
  );
}
