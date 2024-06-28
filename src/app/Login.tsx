import { View } from "react-native";
import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import Background from "../components/ui/Background";
import Logo from "../components/ui/Logo";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigation.navigate("Select a Character");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <Background>
      <View className="flex-1 justify-center">
        <Logo />
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
        <LoginButton onPress={handleLogin} />
      </View>
    </Background>
  );
}
