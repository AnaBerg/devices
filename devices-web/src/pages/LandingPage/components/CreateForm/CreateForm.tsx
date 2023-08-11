import { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { Form, Select, TextField, Button, Toast } from "../../../../components";
import useMutation from "../../../../hooks/useMutation";

import { DeviceType } from "../../../../types/device";

type Inputs = {
  name: string;
  type: DeviceType | string;
  serial: string;
  macAddress: string;
};

interface CreateFormProps {}

const CreateForm: React.FC<CreateFormProps> = () => {
  const defaultValues = { macAddress: "", name: "", serial: "", type: "" };
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<"error" | "success">("success");
  const { loading, error, success, mutate } = useMutation("POST", "/v1/device");
  const methods = useForm<Inputs>({ defaultValues });
  const {
    formState: { errors },
    handleSubmit,
    reset,
  } = methods;

  useEffect(() => {
    if (success) {
      setMessage("Dispositivo criado com sucesso");
      setType("success");
      reset(defaultValues);
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    if (error) {
      setMessage("Um erro ocorreu ao criar dispositivo");
      setType("error");
      setOpen(true);
    }
  }, [error]);

  const handleToastClose = (
    _?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        <Button loading={loading} onClick={(e) => onReset(e)} variant="text">
          Limpar
        </Button>
        <div style={{ width: "10px" }} />
        <Button type="submit">Enviar</Button>
      </div>
      <Toast
        open={open}
        onClose={handleToastClose}
        type={type}
        message={message}
      />
    </Form>
  );
};

export default CreateForm;
