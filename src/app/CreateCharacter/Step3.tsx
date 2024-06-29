import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { getStatsAcronym } from "../../constants/Stats";
import StatLine from "./StatLine";
import ImageButton from "../../components/ImageButton";

export default function Step3() {
  const stats = getStatsAcronym();

  const handleDice = () => {
    console.log("I am so tired");
  };

  const handleReset = () => {
    console.log("I am so tired");
  };

  const handleDecrease = () => {
    console.log("Should decrease");
  };

  const handleIncrease = () => {
    console.log("Should increase");
  };

  return (
    <View>
      <View className="flex flex-row mb-6">
        <View className="flex-1">
          <ImageButton
            imageName="dice"
            className="self-center"
            onPress={handleDice}
          />
        </View>
        <View className="flex-1">
          <Text className="text-center">0</Text>
        </View>
        <View className="flex-1">
          <ImageButton
            imageName="reset"
            className="self-center"
            onPress={handleReset}
          />
        </View>
      </View>
      <ScrollView className="p-4">
        {stats.map((stat, index) => (
          <StatLine key={index} stat={stat} />
        ))}
      </ScrollView>
      <View className="flex flex-row mb-6">
        <View className="flex-1">
          <ImageButton
            imageName="arrowDown"
            className="self-center"
            onPress={handleDecrease}
          />
        </View>
        <View className="flex-1">
          <Text className="text-center">0</Text>
        </View>
        <View className="flex-1">
          <ImageButton
            imageName="arrowUp"
            className="self-center"
            onPress={handleIncrease}
          />
        </View>
      </View>
    </View>
  );
}
