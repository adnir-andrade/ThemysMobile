import { Character } from "../types/Character";

export function getStatsName() {
  const stats = [
    "Strenght",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  return stats;
}

export function getStatsAcronym(): string[] {
  const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  return stats;
}

export function acronymToAttribute(
  acronym: string,
  character: Character
): number | undefined {
  type RelationType = {
    [key: string]: number;
  };

  const relation: RelationType = {
    STR: character.strength,
    DEX: character.dexterity,
    CON: character.constitution,
    INT: character.intelligence,
    WIS: character.wisdom,
    CHA: character.charisma,
  };

  return relation[acronym] || 10;
}
