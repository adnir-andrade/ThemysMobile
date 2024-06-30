import React, { useEffect, useState } from "react";
import { levels } from "../../constants/Levels";
import { genders } from "../../constants/Genders";
import { races } from "../../constants/Races";

import AttributeDropdown from "./AttributeDropdown";
import { Character } from "../../types/Character";

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

export default function Step1({ character, updateCharacter }: Props) {
  const [chosenLevel, setChosenLevel] = useState<number | null>(
    character.level
  );
  const [chosenGender, setChosenGender] = useState<string | null>(
    character.gender ?? ""
  );
  const [chosenRace, setChosenRace] = useState<string | null>(character.race);

  useEffect(() => {
    if (chosenLevel !== null) {
      updateCharacter({ level: chosenLevel });
    }
  }, [chosenLevel]);

  useEffect(() => {
    if (chosenGender !== null) {
      updateCharacter({ gender: chosenGender });
    }
  }, [chosenGender]);

  useEffect(() => {
    if (chosenRace !== null) {
      updateCharacter({ race: chosenRace });
    }
  }, [chosenRace]);

  return (
    <>
      <AttributeDropdown
        itemsList={levels}
        value={chosenLevel}
        setValue={setChosenLevel}
        title="Character Level"
        placeholder="Level"
        zIndex={3000}
        zIndexInverse={1000}
      />
      <AttributeDropdown
        itemsList={genders}
        value={chosenGender}
        setValue={setChosenGender}
        title="Gender"
        placeholder="Gender"
        zIndex={2000}
        zIndexInverse={2000}
      />
      <AttributeDropdown
        itemsList={races}
        value={chosenRace}
        setValue={setChosenRace}
        title="Race"
        placeholder="Race"
        zIndex={1000}
        zIndexInverse={3000}
        dropDownDirection="TOP"
      />
    </>
  );
}
