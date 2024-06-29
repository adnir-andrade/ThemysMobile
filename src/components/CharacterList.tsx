import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Character } from "../types/Character";
import { getCharactersByPlayer } from "../services/characterService";
import AppContext from "../contexts/AppContext";
import { Ionicons } from "@expo/vector-icons";

export default function CharacterList() {
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
    console.log("Click click! Time to... See!");
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
      <TouchableOpacity className="px-1" onPress={() => handleView(item.id!)}>
        <Text className="italic text-3xl pl-5 font-bold text-amber-200 underline decoration-amber-900/50 capitalize">
          {`${item.name} - ${item.level}`}
        </Text>
      </TouchableOpacity>
      <View className="mt-2 mb-8 border-solid border-2 border-gray-300 rounded-2xl p-4">
        <View className="flex justify-between mb-4">
          <View>
            <Text className="text-lg">Campaign:</Text>
            <Text className="text-lg">Race: {item.race}</Text>
            <Text className="text-lg">Class: {item.klass}</Text>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            className="px-1"
            onPress={() => handleEdit(item.id!)}
          >
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id!)}>
            <Ionicons name="trash-sharp" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  return (
    <View>
      <FlatList className="mx-8" data={characters} renderItem={renderItem} />
      <TouchableOpacity onPress={() => handleAdd()}>
        <ImageBackground
          source={require("../../assets/images/add.png")}
          className="h-16"
          resizeMode="contain"
        ></ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
