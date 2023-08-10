import { useForm, SubmitHandler } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import { Button, TextField } from "../../../components";

import { handleMacAddressMask } from "../../../helpers/handleMacAddressMask";

type Inputs = {
  macAddress: string;
};

interface MacAddressFormProps {
  mutate?: (body: any) => Promise<void>;
  query?: (params: any) => void;
  error?: boolean;
}

const MacAddresForm = ({ error, mutate, query }: MacAddressFormProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      if (mutate) {
        mutate(data);
      } else if (query) {
        query(data);
      }
    }
  };

  return (
    <View>
      <TextField
        name="macAddress"
        label="Mac Address"
        register={register}
        setValue={setValue}
        mask={handleMacAddressMask}
        error={!!errors.macAddress}
        required
      />
      <View style={style.buttonContainer}>
        <Button onPress={handleSubmit(onSubmit)}>Enviar</Button>
      </View>
      {error ? <Text style={style.errorMessage}>Error</Text> : null}
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    paddingTop: 10,
  },
  errorMessage: {
    color: "#D32F2F",
  },
});

export default MacAddresForm;
