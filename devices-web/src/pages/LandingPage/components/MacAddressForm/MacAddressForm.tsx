import { useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { Form, TextField, Button } from "../../../../components";

type Inputs = {
  macAddress: string;
};

interface MacAddressFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mutate?: (body: any) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query?: (params: any) => void;
  loading?: boolean;
  success?: boolean;
}

const MacAddressForm: React.FC<MacAddressFormProps> = ({
  mutate,
  query,
  loading = false,
  success = false,
}) => {
  const defaultValues = { macAddress: "" };
  const methods = useForm<Inputs>({ defaultValues });
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  useEffect(() => {
    if (success) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      if (mutate) {
        mutate(data);
      } else if (query) {
        query(data);
      }
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
        <Button loading={loading} type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

export default MacAddressForm;
