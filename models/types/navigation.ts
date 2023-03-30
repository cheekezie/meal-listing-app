import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

// Interface for rootstack. Undefined if no value is passed, pass objects if param values are required
export type RootStackParamList = {
  CategoriesScreen: undefined;
  MealDetailsScreen: {
    mealId: string;
    mealTitle: string;
  };
  MealsOverviewScreen: {
    categoryId: string;
  };
};

export interface CategoryScreenNavigationPropsI {
  navigation: NativeStackNavigationProp<RootStackParamList, "CategoriesScreen">;
}
export interface MealDetailScreenNavPropsI {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "MealDetailsScreen"
  >;
  route: RouteProp<RootStackParamList, "MealDetailsScreen">;
}

export interface CategoryOvervieScreenNavPropsI {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "MealsOverviewScreen"
  >;
  route: RouteProp<RootStackParamList, "MealsOverviewScreen">;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
