import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function WelcomeScreen() {
  const ring1Padding = useSharedValue(0);
  const ring2Padding = useSharedValue(0);

  useEffect(() => {
    ring1Padding.value = 0;
    ring2Padding.value = 0;
    setTimeout(() => {
      ring1Padding.value = withSpring(ring1Padding.value + hp(5));
    }, 100);
    setTimeout(() => {
      ring2Padding.value = withSpring(ring2Padding.value + hp(5));
    }, 200);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* Logo with rings */}
      <Animated.View
        className="bg-white/20 rounded-full "
        style={{
          padding: ring2Padding,
        }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{
            padding: ring1Padding,
          }}
        >
          <Image
            source={require("../../assets/food.png")}
            className="rounded-full"
            style={{
              width: hp(20),
              height: hp(20),
            }}
          />
        </Animated.View>
      </Animated.View>

      {/* Title and punchline */}
      <View className="flex space-y-2 items-center">
        <Text
          style={{
            fontSize: hp(7),
          }}
          className="font-bold text-white tracking-widest text-6xl"
        >
          Foody
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className="font-semibold text-white tracking-widest tex-lg"
        >
          Food is always right
        </Text>
      </View>
    </View>
  );
}
