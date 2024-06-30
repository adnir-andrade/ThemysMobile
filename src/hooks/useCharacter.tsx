import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Character = {
  player_id: number;
  name: string;
  level: number;
  gender: string;
  race: string;
  klass: string;
  klass_level: number;
  hp: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  background: string;
};

const initialCharacter: Character = {
  player_id: 0,
  name: "",
  level: 1,
  gender: "",
  race: "",
  klass: "",
  klass_level: 1,
  hp: 0,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  background: "",
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
