import { View } from "react-native";
import React, { useState } from "react";
import LoginButton from "../components/LoginButton";
import Background from "../components/ui/Background";
import Logo from "../components/ui/Logo";
import LoginForm from "../components/LoginForm";
import { login } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      //   router.push("/select-character");
    } catch (error: any) {}
  };

  return (
    <Background>
      <View className="flex-1 justify-center">
        <Logo />
      </View>
    </Background>
  );
}
