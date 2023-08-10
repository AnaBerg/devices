import { StyleSheet, View, Text } from "react-native";

type Item = {
  title: string;
  description: string;
};

interface ListProps {
  items: Array<Item>;
}

const List = ({ items }: ListProps) => {
  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Não há dispositivos para listar</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {items.map(({ description, title }, i) => (
        <View
          style={i === items.length - 1 ? styles.lastItem : styles.item}
          key={i}
        >
          <Text style={styles.title}>{title}</Text>
          <Text>{description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#B2B2B2",
    borderRadius: 4,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  item: {
    padding: 5,
    borderBottomColor: "#B2B2B2",
    borderBottomWidth: 1,
  },
  lastItem: {
    padding: 5,
  },
});

export default List;
