import { useForm, SubmitHandler } from "react-hook-form";

import { Form, TextField, Button } from "../../../components";

type Inputs = {
  macAddress: string;
};

interface MacAddressFormProps {}

const MacAddressForm: React.FC<MacAddressFormProps> = () => {
  const defaultValues = { macAddress: "" };
  const methods = useForm<Inputs>({ defaultValues });
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

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
      <TextField
        name="macAddress"
        label="MAC Address"
        mask="**:**:**:**:**:**"
        error={!!errors.macAddress}
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

export default MacAddressForm;
