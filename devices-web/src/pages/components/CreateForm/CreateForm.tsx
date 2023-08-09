import { useForm, SubmitHandler } from "react-hook-form";

import { Form, Select, TextField, Button } from "../../../components";
import { DeviceType } from "../../../types/device";

type Inputs = {
  name: string;
  type: DeviceType | string;
  serial: string;
  macAddress: string;
};

interface CreateFormProps {}

const CreateForm: React.FC<CreateFormProps> = () => {
  const defaultValues = { macAddress: "", name: "", serial: "", type: "" };
  const methods = useForm<Inputs>({ defaultValues });
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  const types = [
    { label: "Câmera", value: "CAMERA" },
    { label: "Sensor", value: "SENSOR" },
    { label: "Controle Remoto", value: "REMOTE_CONTROL" },
  ];

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      console.log(data);
    }
  };

  const onReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    reset(defaultValues);
  };

  return (
    <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <TextField name="name" label="Nome" error={!!errors.name} required />
      <TextField
        name="serial"
        label="Serial"
        error={!!errors.serial}
        required
      />
      <TextField
        name="macAddress"
        label="MAC Address"
        mask="**:**:**:**:**:**"
        error={!!errors.macAddress}
        required
      />
      <Select
        items={types}
        name="type"
        label="Tipo"
        error={!!errors.type}
        required
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px 0",
        }}
      >
        <Button onClick={(e) => onReset(e)} variant="text">
          Limpar
        </Button>
        <div style={{ width: "10px" }} />
        <Button type="submit">Enviar</Button>
      </div>
    </Form>
  );
};

export default CreateForm;
