import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { CATEGORIES } from "./data/dummmy-data";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { Text } from "react-native";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CategoriesScreen"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#251401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#372518",
            },
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            options={{
              title: "All Categories",
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen as any}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen as any}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
