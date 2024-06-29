import { Character } from "./Character";

export type RootStackParamList = {
  Login: undefined;
  SelectCharacter: undefined;
  ViewCharacter: { character: Character };
};