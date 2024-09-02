import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 50,
        }}
      ></ScrollView>
    </View>
  );
}
