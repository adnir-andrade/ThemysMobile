import { View } from "react-native";
import React, { useContext, useState } from "react";
import Background from "../../components/ui/Background";
import Logo from "../../components/ui/Logo";
import LoginForm from "./LoginForm";
import { login } from "../../services/authService";
import AppContext from "../../contexts/AppContext";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import ImageButton from "../../components/ImageButton";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const app = useContext(AppContext);

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      app?.setUser(response.user);
      console.log(response.user.role);
      if (response.user.role === "dm") navigation.navigate("SelectCampaign");
      if (response.user.role === "player")
        navigation.navigate("SelectCharacter");
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
        <ImageButton
          imageName="login"
          className="self-center"
          onPress={handleLogin}
        />
      </View>
    </Background>
  );
}
