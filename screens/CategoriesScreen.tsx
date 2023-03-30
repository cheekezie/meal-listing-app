import { FlatList } from "react-native";
import CategoryGridTiles from "../components/CategoryGridTiles";
import { CATEGORIES } from "../data/dummmy-data";
import Category from "../models/categories";
import { CategoryScreenNavigationPropsI } from "../models/types/navigation";

const CategoriesScreen = (props: CategoryScreenNavigationPropsI) => {
  // helper function to return grid item to make code look neater
  const renderCategoryItem = (itemData: { item: Category }) => {
    const cardPressed = () => {
      props.navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTiles
        color={itemData.item.color}
        title={itemData.item.title}
        onPress={cardPressed}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
