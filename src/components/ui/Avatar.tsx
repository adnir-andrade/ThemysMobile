import { Pressable, Image, PressableProps } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import AppContext from "../../contexts/AppContext";

type Props = {} & PressableProps;

export default function Avatar({ ...rest }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleAvatar = () => {
    navigation.navigate("Profile");
  };

  const app = useContext(AppContext);
  return (
    <Pressable onPress={handleAvatar} {...rest}>
      <Image
        source={{
          uri:
            app?.user.profile_url! ??
            require("../../../assets/images/profile/anon.jpg"),
        }}
        resizeMode="cover"
        className="rounded-full h-14 w-14 self-end mx-3 mt-1 z-20 "
      ></Image>
    </Pressable>
  );
}
