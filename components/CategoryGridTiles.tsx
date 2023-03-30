import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { GridTilePropsI } from "../models/types/props";
import { DisplayStyles } from "../styles/Display.style";

const CategoryGridTiles = (props: GridTilePropsI) => {
  const { onPress, color, title } = props;

  return (
    <View style={[styles.gridItem]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? DisplayStyles.clickFeedback : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.inerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTiles;

const styles = StyleSheet.create({
  gridItem: {
    ...DisplayStyles.shadow,
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white", // must exist for shadow to work in IOS
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  inerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
