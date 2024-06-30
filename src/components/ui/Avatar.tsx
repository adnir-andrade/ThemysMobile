import { Pressable, Image, PressableProps } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";

type Props = {} & PressableProps;

export default function Avatar({ ...rest }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleAvatar = () => {
    navigation.navigate("Profile");
  };

  return (
    <Pressable onPress={handleAvatar} {...rest}>
      <Image
        source={require("../../../assets/images/profile/profile1.jpg")}
        resizeMode="cover"
        className="rounded-full h-14 w-14 self-end mx-3 mt-1 z-20 "
      ></Image>
    </Pressable>
  );
}
