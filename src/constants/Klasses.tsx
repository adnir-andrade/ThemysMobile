function getKlasses() {
  const klasses = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
  ];

  const mappedKlasses = klasses.map((klass) => ({
    label: klass,
    value: klass,
  }));

  return mappedKlasses;
}

export const klasses = getKlasses();
