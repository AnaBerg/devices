import { useForm, SubmitHandler } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import { Button, Select, TextField } from "../../../components";

import { DeviceType } from "../../../types/device";
import useMutation from "../../../hooks/useMutation";
import { handleMacAddressMask } from "../../../helpers/handleMacAddressMask";

type Inputs = {
  name: string;
  type: DeviceType | string;
  serial: string;
  macAddress: string;
};

const CreateForm = () => {
  const { error, mutate } = useMutation("POST", "/v1/device");
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm<Inputs>();

  const types = [
    { label: "Câmera", value: "CAMERA" },
    { label: "Sensor", value: "SENSOR" },
    { label: "Controle Remoto", value: "REMOTE_CONTROL" },
  ];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      mutate(data);
    }
  };

  return (
    <View>
      <TextField
        name="name"
        label="Nome"
        register={register}
        setValue={setValue}
        error={!!errors.name}
        required
      />
      <TextField
        name="serial"
        label="Serial"
        register={register}
        setValue={setValue}
        error={!!errors.serial}
        required
      />
      <TextField
        name="macAddress"
        label="Mac Address"
        register={register}
        setValue={setValue}
        mask={handleMacAddressMask}
        error={!!errors.macAddress}
        required
      />
      <Select
        items={types}
        name="type"
        label="Tipo"
        register={register}
        setValue={setValue}
        error={!!errors.type}
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

export default CreateForm;
