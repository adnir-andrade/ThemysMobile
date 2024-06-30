import React, { useEffect, useState } from "react";
import { getLevels } from "../../constants/Levels";
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
    updateCharacter({
      klass: chosenKlass!,
      klass_level: chosenKlassLevel!,
    });
  }, [chosenKlass, chosenKlassLevel]);

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
        itemsList={getLevels(character.level)}
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
