import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const SubTitle = (props: { children: any }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{props.children}</Text>
    </View>
  );
};

export default SubTitle;
const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: theme.Colors.lightSecondary,
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: theme.Colors.lightSecondary,
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
