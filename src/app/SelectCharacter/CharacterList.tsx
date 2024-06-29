import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Character } from "../../types/Character";
import { getCharactersByPlayer } from "../../services/characterService";
import AppContext from "../../contexts/AppContext";
import AddButton from "../../components/AddButton";
import EditButton from "../../components/EditButton";
import DeleteButton from "../../components/DeleteButton";
import TouchableTitle from "../../components/TouchableTitle";
import CardFramed from "../../components/containers/CardFramed";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

type Props = NativeStackScreenProps<RootStackParamList, "SelectCharacter">;

export default function CharacterList({ navigation }: Props) {
  const [characters, setCharacters] = useState();
  const app = useContext(AppContext);

  const fetchCharacters = async () => {
    try {
      const data = await getCharactersByPlayer(app?.user.id!);
      setCharacters(data.characters);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleView = (id: number) => {
    console.log(`Opening character ${id}`);
    navigation.navigate("ViewCharacter", { characterId: id });
  };

  const handleEdit = (id: number) => {
    console.log("Click click! Time to edit!");
  };

  const handleDelete = (id: number) => {
    console.log("Click click! Time to delete");
  };

  const handleAdd = () => {
    console.log("Click click! Time to make another one");
  };

  const renderItem = ({ item }: { item: Character }) => (
    <>
      <TouchableTitle
        title={`${item.name} - ${item.level}`}
        className="px-1"
        onPress={() => handleView(item.id!)}
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
          <EditButton className="px-1" onPress={() => handleEdit(item.id!)} />
          <DeleteButton onPress={() => handleDelete(item.id!)} />
        </View>
      </CardFramed>
    </>
  );

  return (
    <View>
      <FlatList className="mx-8" data={characters} renderItem={renderItem} />
      <AddButton onPress={handleAdd} />
    </View>
  );
}
