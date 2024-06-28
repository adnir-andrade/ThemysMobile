import { ImageBackground } from "react-native";
import React, { ReactNode, useContext } from "react";
import AppContext from "../../contexts/AppContext";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  const app = useContext(AppContext);
  const source_light = require("../../../assets/images/background.png");
  const source_dark = require("../../../assets/images/wallpaper.png");
  const logo = true ? source_light : source_dark;

  return (
    <ImageBackground source={logo} className="h-screen w-full opacity-95">
      {children}
    </ImageBackground>
  );
}
