import React, { useState } from "react";
import { levels } from "../../constants/Levels";
import { klasses } from "../../constants/Klasses";

import AttributeDropdown from "./AttributeDropdown";

export default function Step2() {
  const [chosenKlass, setChosenKlass] = useState(null);
  const [chosenKlassLevel, setChosenKlassLevel] = useState(null);

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
