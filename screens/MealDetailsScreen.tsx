import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderIconButton from "../components/HeaderIconButton";
import List from "../components/MealDetail/List";
import SubTitle from "../components/MealDetail/SubTitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummmy-data";
import Meal from "../models/meals";
import { MealDetailScreenNavPropsI } from "../models/types/navigation";
import { MealdetailsPropI } from "../models/types/props";
import theme from "../theme";
import { FavoritesContext } from "../store/context/favorites-context";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import {
  addFavorite,
  removeFavorite,
  selectFavorite,
} from "../store/redux/favorites";

const MealDetailsScreen = (props: MealDetailScreenNavPropsI) => {
  const { navigation, route } = props;
  const { mealId, mealTitle } = route.params;

  // CONTEXT API IMPLEMENTATION
  // const favoriteMealsContext = useContext(FavoritesContext);
  // const isFavorite = favoriteMealsContext.ids.includes(mealId);
  // const headerButtonPressed = () => {
  //   isFavorite
  //     ? favoriteMealsContext.removeFavorite(mealId)
  //     : favoriteMealsContext.addFavorite(mealId);
  // };

  // REDUX IMPLEMENTATION
  const favoriteMealsContext = useAppSelector(selectFavorite);
  const dispatch = useAppDispatch();
  const isFavorite = favoriteMealsContext.includes(mealId);

  const headerButtonPressed = () => {
    isFavorite
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <HeaderIconButton
            icon={isFavorite ? "heart" : "heart-outline"}
            color={isFavorite ? theme.Colors.lightSecondary : "white"}
            onPress={headerButtonPressed}
          />
        );
      },
      headerLeft: () => {
        return (
          <HeaderIconButton
            icon={"close"}
            color={"white"}
            onPress={navigation.goBack}
          />
        );
      },
    });
  }, [mealTitle, navigation, headerButtonPressed]);

  const meal = MEALS.find((m) => m.id === mealId) as Meal;
  const mealDetailprop: MealdetailsPropI = {
    affordability: meal.affordability,
    duration: meal.duration,
    complexity: meal.complexity,
    textStyle: styles.detailText,
  };
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal?.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>

      {/* using spread operator o spread the object elements */}
      <MealDetails {...mealDetailprop} />
      <View style={styles.listContainer}>
        <View style={styles.listInnerContainer}>
          <SubTitle>Ingredeints</SubTitle>
          <List data={meal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.Colors.white,
  },

  detailText: {
    color: theme.Colors.white,
  },
  listContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    maxWidth: "80%",
  },
});
