import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native";
import MealItem from "./MealItem";
import Meal from "../../models/meals";
import { MealsListngPropsI } from "../../models/types/props";

const MealsList = ({ displayedMeals }: MealsListngPropsI) => {
  const renderMealItem = (itemData: { item: Meal }) => {
    return <MealItem meal={itemData.item} />;
  };

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

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
