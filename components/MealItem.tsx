import { Image, StyleSheet, Text, View } from "react-native";
import Meal from "../models/meals";
import { Pressable } from "react-native";
import theme from "../theme";
import { DisplayStyles } from "../styles/Display.style";
import { useNavigation } from "@react-navigation/native";
import { MealDetailScreenNavPropsI } from "../models/types/navigation";
import MealDetails from "./MealDetails";
import { MealdetailsPropI } from "../models/types/props";

const MealItem = (prop: { meal: Meal }) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate("MealDetailsScreen", {
      mealId: meal.id,
      mealTitle: meal.title,
    });
  };

  const { meal } = prop;
  const mealDetailprop: MealdetailsPropI = {
    affordability: meal.affordability,
    duration: meal.duration,
    complexity: meal.complexity,
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={selectMealItemHandler}
        style={({ pressed }) => [pressed ? DisplayStyles.clickFeedback : null]}
      >
        <View style={[DisplayStyles.radiusSm, DisplayStyles.overFlowHidden]}>
          <View>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>

          <MealDetails {...mealDetailprop} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    ...DisplayStyles.shadow,
    backgroundColor: theme.Colors.white,
    margin: 16,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
});
