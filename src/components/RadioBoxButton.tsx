import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  label?: string;
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  format: "radio" | "checkbox";
};

export default function RadioBoxButton({
  label,
  isChecked,
  setIsChecked,
  format,
}: Props) {
  const toggleRadioButton = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      className="flex-row items-center"
      onPress={toggleRadioButton}
    >
      <View
        className={`w-5 h-5 border-2 border-black ${
          isChecked ? "bg-black" : "bg-white/30"
        } ${format === "radio" ? "rounded-full" : ""}`}
      >
        {isChecked && <Text className="text-white text-xs">✔</Text>}
      </View>
      <Text className="ml-2 text-lg">{label}</Text>
    </TouchableOpacity>
  );
}
