import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { getStatsAcronym } from "../../constants/Stats";
import StatLine from "./StatLine";
import DiceButton from "../../components/DiceButton";
import ResetButton from "../../components/ResetButton";

export default function Step3() {
  const stats = getStatsAcronym();

  const handleDice = () => {
    console.log("I am so tired");
  };

  const handleReset = () => {
    console.log("I am so tired");
  };

  return (
    <View>
      <View className="flex flex-row mb-6">
        <View className="flex-1">
          <DiceButton className="self-center" onPress={handleDice} />
        </View>
        <View className="flex-1">
          <Text className="text-center">0</Text>
        </View>
        <View className="flex-1">
          <ResetButton className="self-center" onPress={handleReset} />
        </View>
      </View>
      <ScrollView className="p-4">
        {stats.map((stat, index) => (
          <StatLine key={index} stat={stat} />
        ))}
      </ScrollView>
    </View>
  );
}
