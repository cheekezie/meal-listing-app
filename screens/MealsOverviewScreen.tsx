import { FlatList, StyleSheet, Text, View } from "react-native";
import { CategoryOvervieScreenNavPropsI } from "../models/types/navigation";
import { useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummmy-data";
import Meal from "../models/meals";
import MealItem from "../components/MealItem";

// use CategoryOvervieScreenNavPropsI interface
const MealsOverviewScreen: React.FC<CategoryOvervieScreenNavPropsI> = ({
  navigation,
  route,
}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  const renderMealItem = (itemData: { item: Meal }) => {
    return <MealItem meal={itemData.item} />;
  };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((m) => m.id === catId)?.title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
