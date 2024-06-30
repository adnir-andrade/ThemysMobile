import React, { useContext, useEffect, useState } from "react";
import { levels } from "../../constants/Levels";
import { genders } from "../../constants/Genders";
import { races } from "../../constants/Races";

import AttributeDropdown from "./AttributeDropdown";
import { Character } from "../../types/Character";
import AppContext from "../../contexts/AppContext";

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

export default function Step1({ character, updateCharacter }: Props) {
  const app = useContext(AppContext);

  const [chosenLevel, setChosenLevel] = useState<number | null>(
    character.level
  );
  const [chosenGender, setChosenGender] = useState<string | null>(
    character.gender ?? ""
  );
  const [chosenRace, setChosenRace] = useState<string | null>(character.race);

  useEffect(() => {
    updateCharacter({ player_id: app?.user.id });
  }, []);

  useEffect(() => {
    updateCharacter({
      level: chosenLevel!,
      gender: chosenGender!,
      race: chosenRace!,
    });
  }, [chosenLevel, chosenGender, chosenRace]);

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
