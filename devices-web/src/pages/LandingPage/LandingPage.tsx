import { useEffect, useState } from "react";

import { Accordian, List, Toast } from "../../components";
import { handleDeviceList } from "../../helper/handleDeviceList";
import useQuery from "../../hooks/useQuery";
import { CreateForm, MacAddressForm } from "../components";
import useMutation from "../../hooks/useMutation";

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const {
    data: listData,
    error: listError,
    loading: listLoading,
  } = useQuery("/v1/devices");
  const {
    data: deviceData,
    error: deviceError,
    loading: deviceLoading,
    query,
  } = useQuery("/v1/device");
  const {
    error: deleteError,
    loading: deleteLoading,
    success,
    mutate,
  } = useMutation("DELETE", "/v1/device");
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<"error" | "success">("success");

  useEffect(() => {
    if (listError) {
      setMessage("Um erro ocorreu ao listar dispositivos");
      setType("error");
      setOpen(true);
    }

    if (deviceError) {
      setMessage("Um erro ocorreu ao consular o dispositivo");
      setType("error");
      setOpen(true);
    }

    if (deleteError) {
      setMessage("Um erro ocorreu ao deletar o dispositivo");
      setType("error");
      setOpen(true);
    }
  }, [listError, deviceError, deleteError]);
  useEffect(() => {
    if (success) {
      setMessage("Dispositivo deletado com sucesso");
      setType("success");
      setOpen(true);
    }
  }, [success]);

  const handleToastClose = (
    _?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const devices = handleDeviceList(listData);
  const device = handleDeviceList(deviceData ? [deviceData] : []);

  return (
    <>
      <Accordian title="Cadastrar">
        <div>
          <CreateForm />
        </div>
      </Accordian>
      <Accordian title="Consultar">
        <div>
          <MacAddressForm query={query} loading={deviceLoading} />
          {deviceData ? <List items={device} /> : null}
        </div>
      </Accordian>
      <Accordian title="Listar">
        <div>
          <List loading={listLoading} items={devices ?? []} />
        </div>
      </Accordian>
      <Accordian title="Excluir">
        <div>
          <MacAddressForm
            loading={deleteLoading}
            success={success}
            mutate={mutate}
          />
        </div>
      </Accordian>
      <Toast
        open={open}
        onClose={handleToastClose}
        type={type}
        message={message}
      />
    </>
  );
};

export default LandingPage;
