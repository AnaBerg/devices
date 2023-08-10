import { useEffect, useState } from "react";

import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface TextFieldProps {
  label: string;
  setValue: UseFormSetValue<any>;
  register: UseFormRegister<any>;
  name: string;
  mask?: (value: string) => string;
  required?: boolean;
  error?: boolean;
}

const TextField = ({
  label,
  register,
  setValue,
  name,
  mask = (value) => value,
  required = false,
  error = false,
}: TextFieldProps) => {
  const [v, setV] = useState<string>("");
  useEffect(() => {
    register(name, { required });
  }, [register]);

  const labelStyle = error ? style.labelError : style.label;
  const inputStyle = error ? style.inputError : style.input;

  return (
    <View style={style.container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={v}
        onChangeText={(value: string) => {
          setV(mask(value));
          setValue(name, mask(value));
        }}
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
  input: {
    borderColor: "#B2B2B2",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
  },

  inputError: {
    borderColor: "#D32F2F",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
  },
});

export default TextField;
