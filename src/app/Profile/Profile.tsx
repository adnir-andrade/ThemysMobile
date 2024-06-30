import { View, Text, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import Background from "../../components/ui/Background";
import Navbar from "../../components/ui/Navbar";
import Logo from "../../components/ui/Logo";
import Header from "../../components/Header";
import AppContext from "../../contexts/AppContext";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import FormInput from "../../components/FormInput";
import CustomInput from "../../components/CustomInput";
import { logout } from "../../services/authService";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

export default function Profile() {
  const app = useContext(AppContext);
  const [image, setImage] = useState(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleAvatar = () => {
    navigation.navigate("Profile");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleChangePassword = () => {
    console.log("Changing password");
  };

  const handleLogOut = async () => {
    try {
      await logout();
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <Background>
      <Navbar />
      <View>
        <Logo />
        <Header
          title={app?.user.name!}
          color="text-orange-300 "
          className="mt-20 mb-5"
        />
        <Image
          source={
            image
              ? { uri: image }
              : require("../../../assets/images/profile/profile1.jpg")
          }
          resizeMode="cover"
          className="rounded-full h-64 w-64 self-center border border-double border-4 border-epic"
        ></Image>
        <View className="self-center items-center bg-black w-20 rounded-xl bg-[#CF9A86]/50">
          <Pressable onPress={pickImage}>
            <Ionicons name="camera-sharp" size={24} color="#BCCF86" />
          </Pressable>
        </View>
        <View className="mx-5">
          <CustomInput label="Name" />
          <CustomInput label="Password" secureTextEntry />
          <CustomInput label="Confirm Password" secureTextEntry />
          <Pressable
            className="bg-purple-800 p-2 rounded self-center w-full mt-8"
            onPress={() => handleChangePassword()}
          >
            <Text className="text-white text-lg text-center font-bold">
              Change Password
            </Text>
          </Pressable>
          <Pressable
            className="bg-red-800 p-2 rounded self-center w-full mt-5"
            onPress={() => handleLogOut()}
          >
            <Text className="text-white text-lg text-center font-bold">
              Log Out
            </Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
}
