import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface AccordianProps {
  children: React.ReactNode;
  title: string;
}

const Accordian = ({ children, title }: AccordianProps) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.header} onPress={() => setOpen((p) => !p)}>
        <Text style={style.title}>{title}</Text>
        <Icon name={open ? "chevron-up" : "chevron-down"} size={20} />
      </TouchableOpacity>
      {open ? <View style={style.content}>{children}</View> : null}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 12,
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 12,
  },
});

export default Accordian;
