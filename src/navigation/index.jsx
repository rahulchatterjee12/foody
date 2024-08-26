import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      //   navigation.navigate("Home");
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
