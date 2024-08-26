import React from "react";
import { StatusBar, Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />
      <Text className="text-red-300">Home Screen</Text>
    </View>
  );
}
