import { View, Text, TextInput, TextInputProps } from "react-native";

type FormInput = {
  label?: string;
} & TextInputProps;

export default function FormInput({ label, ...rest }: FormInput) {
  return (
    <View className="p-3 w-full border-slate-500 rounded-lg border-2 mb-6 bg-white focus:border-y-amber-200 focus:border-x-amber-500">
      {label && <Text className="text-2xl">{label}</Text>}
      <TextInput {...rest} className="text-slate-600 text-2xl" />
    </View>
  );
}
