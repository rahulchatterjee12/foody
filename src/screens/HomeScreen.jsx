import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Category from "../components/Category";
import Recipes from "../components/Recipes";
import axios from "axios";

export function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      if (response && response.data) {
        setCategories(response.data.categories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
      );
      if (response && response.data) {
        setRecipes(response.data.meals);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getRecipes();
  }, [activeCategory]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 50,
        }}
        className="space-y-6 mt-4"
      >
        {/* Avatar and Notification Icon*/}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/avatar.png")}
            style={{
              height: hp(5),
              width: hp(5),
            }}
            className="rounded-full"
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* Welcome message */}
        <View className="mx-4 space-y-2 mb-2">
          <Text
            style={{
              fontSize: hp(1.7),
            }}
            className="text-neutral-600"
          >
            Hello, Rahul
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Make your own food,
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.8) }}
            className="font-semibold text-neutral-600"
          >
            stay at <Text className="font-semibold text-amber-600">Home</Text>{" "}
          </Text>
        </View>

        {/* Search Bar */}
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[5px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{
              fontSize: hp(1.7),
            }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={"gray"}
            />
          </View>
        </View>

        {/* Category Section */}
        <View>
          {categories.length > 1 && (
            <Category
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          )}
        </View>
        {/* Recipes Section */}
        <View>
          <Recipes categories={categories} recipes={recipes} />
        </View>
      </ScrollView>
    </View>
  );
}
