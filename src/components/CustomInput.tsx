import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";

type Props = {
  label?: string;
} & TextInputProps;

export default function CustomInput({ label = "", ...rest }: Props) {
  return (
    <>
      <Text className="text-xl ml-3 font-light">{label}</Text>
      <View className="px-3 w-full h-12 border-slate-500 rounded-lg border-2 bg-white/75 focus:border-y-amber-200 focus:border-x-amber-500">
        <TextInput className="text-slate-600 text-lg" {...rest} />
      </View>
    </>
  );
}
