import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Character } from "../types/Character";
import { getCharactersByPlayer } from "../services/characterService";
import AppContext from "../contexts/AppContext";

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

  const renderItem = ({ item }: { item: Character }) => (
    <View className="mb-20">
      <Text>Name: {item.name}</Text>
      <Text>ID: {item.race}</Text>
      <Text>Type: {item.background}</Text>
    </View>
  );

  return (
    <View>
      <FlatList data={characters} renderItem={renderItem} />
    </View>
  );
}
