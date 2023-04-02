import { FlatList, StyleSheet, Text, View } from "react-native";
import { CategoryOvervieScreenNavPropsI } from "../models/types/navigation";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummmy-data";
import Meal from "../models/meals";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

// use CategoryOvervieScreenNavPropsI interface
const MealsOverviewScreen: React.FC<CategoryOvervieScreenNavPropsI> = ({
  navigation,
  route,
}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((m) => m.id === catId)?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;
