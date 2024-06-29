import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  label?: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

export default function Checkbox({ label, isChecked, setIsChecked }: Props) {
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      className="flex-row items-center"
      onPress={toggleCheckbox}
    >
      <View
        className={`w-6 h-6 border-2 border-black rounded-full ${
          isChecked ? "bg-black" : "bg-white/30"
        }`}
      >
        {isChecked && <Text className="text-white text-sm">✔</Text>}
      </View>
      <Text className="ml-2 text-lg">{label}</Text>
    </TouchableOpacity>
  );
}
