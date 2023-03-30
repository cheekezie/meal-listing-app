import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const List = (props: { data: string[] }) => {
  const { data } = props;
  return (
    <View>
      {data.map((d, index) => (
        <View style={styles.listItem} key={index}>
          <Text style={styles.itemtext}>{d}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    marginVertical: 8,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: theme.Colors.lightSecondary,
  },
  itemtext: {
    color: theme.Colors.primary,
    textAlign: "center",
  },
});
