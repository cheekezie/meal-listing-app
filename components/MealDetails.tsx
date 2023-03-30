import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Meal from "../models/meals";
import { MealdetailsPropI } from "../models/types/props";

const MealDetails = (prop: MealdetailsPropI) => {
  const { affordability, duration, complexity, cardStyle, textStyle } = prop;
  return (
    <View style={[styles.details, cardStyle]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  details: {
    padding: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
