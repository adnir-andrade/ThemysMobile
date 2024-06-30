import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../types/Character";

const initialCharacter: Character = {
  player_id: 0,
  name: "",
  level: 1,
  gender: "",
  race: "",
  klass: "",
  klass_level: 1,
  hp: 0,
  strength: 8,
  dexterity: 8,
  constitution: 8,
  intelligence: 8,
  wisdom: 8,
  charisma: 8,
  background: "",
  skills: [],
  points_to_spend: 27,
};

export function useCharacter() {
  const [character, setCharacter] = useState<Character>(initialCharacter);

  useEffect(() => {
    const loadCharacter = async () => {
      const storedCharacter = await AsyncStorage.getItem("character");
      if (storedCharacter) {
        setCharacter(JSON.parse(storedCharacter));
      }
    };
    loadCharacter();
  }, []);

  useEffect(() => {
    const saveCharacter = async () => {
      await AsyncStorage.setItem("character", JSON.stringify(character));
    };
    saveCharacter();
  }, [character]);

  const updateCharacter = (updatedFields: Partial<Character>) => {
    setCharacter((prev) => ({ ...prev, ...updatedFields }));
  };

  const resetCharacter = async () => {
    setCharacter(initialCharacter);
    await AsyncStorage.setItem("character", JSON.stringify(initialCharacter));
  };

  return { character, updateCharacter, resetCharacter };
}
