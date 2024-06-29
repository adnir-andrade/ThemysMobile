function getRaces() {
  const races = [
    "Dragonborn",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Halfing",
    "Human",
    "Thiefling",
  ];

  const mappedRaces = races.map((race) => ({
    label: race,
    value: race,
  }));

  return mappedRaces;
}

export const races = getRaces();
