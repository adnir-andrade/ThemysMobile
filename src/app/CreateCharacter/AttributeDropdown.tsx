import { View, Text } from "react-native";
import React, { useState } from "react";
import DropDownPicker, {
  DropDownDirectionType,
  ItemType,
  ValueType,
} from "react-native-dropdown-picker";

type Props = {
  itemsList: ItemType<ValueType>[];
  value: ValueType | null;
  setValue:
    | React.Dispatch<React.SetStateAction<ValueType>>
    | React.Dispatch<React.SetStateAction<null>>;
  title: string;
  placeholder?: string;
  zIndex: number;
  zIndexInverse: number;
  dropDownDirection?: DropDownDirectionType | undefined;
};

export default function AttributeDropdown({
  itemsList,
  value,
  setValue,
  title,
  placeholder = "Insert something here",
  zIndex,
  zIndexInverse,
  dropDownDirection = "AUTO",
}: Props) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(itemsList);

  return (
    <>
      <Text className="text-xl mb-2 font-medium text-yellow-300">{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        zIndex={zIndex}
        zIndexInverse={zIndexInverse}
        dropDownDirection={dropDownDirection}
      />
      <Text className="mb-4"></Text>
    </>
  );
}
