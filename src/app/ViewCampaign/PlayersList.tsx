import { View, Text, FlatList, Modal, Button, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Character } from "../../types/Character";
import {
  deleteCharacter,
  getCharactersByPlayer,
} from "../../services/characterService";
import AppContext from "../../contexts/AppContext";
import EditButton from "../../components/EditButton";
import DeleteButton from "../../components/DeleteButton";
import TouchableTitle from "../../components/TouchableTitle";
import CardFramed from "../../components/containers/CardFramed";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import ImageButton from "../../components/ImageButton";
import { useCharacter } from "../../hooks/useCharacter";
import { getPlayersByCampaign } from "../../services/campaignService";

type Props = NativeStackScreenProps<RootStackParamList, "ViewCampaign">;

export default function PlayerList({ navigation, route }: Props) {
  const [characters, setCharacters] = useState();
  const [activeCharacter, setActiveCharacter] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const app = useContext(AppContext);
  const { resetCharacter } = useCharacter();
  const { campaign_id } = route.params;

  const fetchCharacters = async () => {
    try {
      const data = await getPlayersByCampaign(campaign_id);
      setCharacters(data.players);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleView = (character: Character) => {
    navigation.navigate("ViewCharacter", { character: character });
  };

  const handleEdit = (character: Character) => {
    navigation.navigate("EditCharacter", { character: character });
  };

  const handleDelete = (id: number) => {
    setActiveCharacter(id);
    setShowDeleteModal(!showDeleteModal);
  };

  const handleAdd = () => {
    resetCharacter();
    navigation.navigate("CreateCharacter");
  };

  const renderItem = ({ item }: { item: Character }) => (
    <>
      <TouchableTitle
        title={`${item.name}`}
        className="px-1"
        onPress={() => handleView(item)}
      />
      <CardFramed>
        <View className="flex justify-between mb-4">
          <View>
            <Text className="text-lg">Campaign:</Text>
            <Text className="text-lg">Race: {item.race}</Text>
            <Text className="text-lg">Class: {item.klass}</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <EditButton className="px-1" onPress={() => handleEdit(item)} />
          <DeleteButton onPress={() => handleDelete(item.id!)} />
        </View>
      </CardFramed>
    </>
  );

  return (
    <View>
      <FlatList
        className="mx-8 h-4/6"
        data={characters}
        renderItem={renderItem}
      />
      <ImageButton
        imageName="add"
        className="self-center"
        onPress={handleAdd}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => {
          setShowDeleteModal(!showDeleteModal);
        }}
      >
        <View className="flex-1 justify-center items-center bg-gray-900/60 p-4">
          <View className="bg-stone-700/80 p-8 rounded-xl shadow-lg w-80">
            <Text className="text-2xl italic font-semibold text-white mb-8 text-center">
              I don't think there will be a return journey, Mr. Frodo!
            </Text>
            <Text className="text-lg font-semibold text-white mb-4 text-center">
              <Text>You are about to delete your character, </Text>
              <Text className="text-red-500">you can't undo this action.</Text>
            </Text>
            <Text className="text-lg font-bold text-white mb-4 text-center">
              Are you sure about this?
            </Text>
            <Pressable
              className="bg-blue-500 p-2 rounded self-center w-full"
              onPress={() => setShowDeleteModal(!showDeleteModal)}
            >
              <Text className="text-white text-lg text-center font-bold">
                Cancel
              </Text>
            </Pressable>
            <Pressable
              className="bg-red-500 p-2 text-lg rounded self-center w-full mt-20"
              onPress={async () => {
                await deleteCharacter(activeCharacter!);
                setShowDeleteModal(!showDeleteModal);
                navigation.reset({
                  index: 0,
                  routes: [{ name: "SelectCharacter" }],
                });
              }}
            >
              <Text className="text-white text-center font-black">DELETE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
