import { StyleSheet, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import Meal from "../models/meals";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummmy-data";
import { View } from "react-native";
import theme from "../theme";
import { useAppSelector } from "../store/hooks/hooks";
import { selectFavorite } from "../store/redux/favorites";

const FavoritesScreen = () => {
  // CONTEXT API IMPLEMENTATION
  //   const favoriteMealsContext = useContext(FavoritesContext);
  //   const favoriteMeals = MEALS.filter((meal) =>
  //     favoriteMealsContext.ids.includes(meal.id)
  //   );

  // REDUX API IMPLEMENTATION
  const favoriteMealsContext = useAppSelector(selectFavorite);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList displayedMeals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.Colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
