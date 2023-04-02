// import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import theme from "./theme";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: "#251401",
  },
  headerTintColor: "white",
  contentStyle: {
    backgroundColor: "#372518",
  },
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#251401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#372518",
        },
        drawerActiveTintColor: theme.Colors.white,
        drawerActiveBackgroundColor: theme.Colors.primary,
        drawerContentStyle: {
          backgroundColor: theme.Colors.lightSecondary,
        },
      }}
    >
      <Drawer.Screen
        name="CategoriesScreen"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        options={{
          title: "My Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
        name="FavoritesScreen"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
              name="MealsCategoryStack"
              options={{
                headerShown: false,
              }}
              component={DrawerNavigator}
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
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
