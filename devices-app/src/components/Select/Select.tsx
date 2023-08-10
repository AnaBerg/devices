import { useEffect } from "react";

import { View, Text, StyleSheet } from "react-native";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import Picker from "react-native-picker-select";

type Item = {
  label: string;
  value: string;
};

interface SelectProps {
  items: Array<Item>;
  label: string;
  setValue: UseFormSetValue<any>;
  register: UseFormRegister<any>;
  name: string;
  required?: boolean;
  error?: boolean;
}

const Select = ({
  items,
  label,
  name,
  register,
  setValue,
  error,
  required,
}: SelectProps) => {
  useEffect(() => {
    register(name, { required });
  }, [register]);

  const labelStyle = error ? style.labelError : style.label;
  const selectStyle = error ? style.selectError : style.select;

  return (
    <View style={style.container}>
      <Text style={labelStyle}>{label}</Text>
      <Picker
        style={{
          inputAndroid: selectStyle,
          inputIOS: selectStyle,
          inputWeb: selectStyle,
        }}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Selecione um item", value: "" }}
        items={items}
        onValueChange={(value: any) => setValue(name, value)}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
  label: {
    fontWeight: "bold",
  },
  labelError: {
    fontWeight: "bold",
    color: "#D32F2F",
  },
  select: {
    borderColor: "#B2B2B2",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  selectError: {
    borderColor: "#D32F2F",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
});

export default Select;
