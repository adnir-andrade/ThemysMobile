import { Character } from "../types/Character";
import api from "./api";
import { getHeader } from "./authService";

export const getCharacters = async () => {
  try {
    const authHeader = await getHeader();
    const response = await api.get("/characters", authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const getCharacterById = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.get(`/characters/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
};

export const createCharacter = async (characterData: Character) => {
  try {
    const authHeader = await getHeader();
    const response = await api.post(
      "/characters",
      { character: characterData },
      authHeader
    );

    return response.data;
  } catch (error) {
    console.error("Error creating Character:", error);
    throw error;
  }
};

export const editCharacter = async (
  characterData: Partial<Character>,
  id: number
) => {
  try {
    const authHeader = await getHeader();
    const response = await api.put(
      `/characters/${id}`,
      { character: characterData },
      authHeader
    );

    return response.data;
  } catch (error) {
    console.error("Error editing Character:", error);
    throw error;
  }
};

export const deleteCharacter = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.delete(`/characters/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error deleting Character:", error);
    throw error;
  }
};

export const getCharactersByPlayer = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.get(`/characters/player/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};
