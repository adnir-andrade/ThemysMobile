import { View } from "react-native";
import FormInput from "../../components/FormInput";
import React, { SetStateAction } from "react";

type LoginFormProps = {
  email: string;
  password: string;
  setEmail: React.Dispatch<SetStateAction<string>>;
  setPassword: React.Dispatch<SetStateAction<string>>;
};

export default function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
}: LoginFormProps) {
  return (
    <View className="px-10 pt-36">
      <FormInput value={email} placeholder="E-mail" onChangeText={setEmail} />
      <FormInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
    </View>
  );
}
