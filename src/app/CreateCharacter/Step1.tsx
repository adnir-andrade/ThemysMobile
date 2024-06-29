import React, { useState } from "react";
import { levels } from "../../constants/Levels";
import { genders } from "../../constants/Genders";
import { races } from "../../constants/Races";

import AttributeDropdown from "./AttributeDropdown";

export default function Step1() {
  const [chosenLevel, setChosenLevel] = useState(null);
  const [chosenGender, setChosenGender] = useState(null);
  const [chosenRace, setChosenRace] = useState(null);

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
