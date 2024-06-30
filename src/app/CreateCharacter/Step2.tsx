import React, { useEffect, useState } from "react";
import { levels } from "../../constants/Levels";
import { klasses } from "../../constants/Klasses";

import AttributeDropdown from "./AttributeDropdown";
import { Character } from "../../types/Character";

type Props = {
  character: Character;
  updateCharacter: (updatedFields: Partial<Character>) => void;
};

export default function Step2({ character, updateCharacter }: Props) {
  const [chosenKlass, setChosenKlass] = useState<string | null>(
    character.klass
  );
  const [chosenKlassLevel, setChosenKlassLevel] = useState<number | null>(
    character.klass_level
  );

  useEffect(() => {
    if (chosenKlass !== null) {
      updateCharacter({ klass: chosenKlass });
    }
  }, [chosenKlass]);

  useEffect(() => {
    if (chosenKlassLevel !== null) {
      updateCharacter({ klass_level: chosenKlassLevel });
    }
  }, [chosenKlassLevel]);

  return (
    <>
      <AttributeDropdown
        itemsList={klasses}
        value={chosenKlass}
        setValue={setChosenKlass}
        title="Class"
        placeholder="Class"
        zIndex={2000}
        zIndexInverse={1000}
      />
      <AttributeDropdown
        itemsList={levels}
        value={chosenKlassLevel}
        setValue={setChosenKlassLevel}
        title="Class Level"
        placeholder="Level"
        zIndex={1000}
        zIndexInverse={2000}
        dropDownDirection="TOP"
      />
    </>
  );
}
