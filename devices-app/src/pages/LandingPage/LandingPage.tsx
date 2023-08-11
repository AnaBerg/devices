import { StyleSheet, View, ScrollView } from "react-native";

import { Accordian, List } from "../../components";
import { CreateForm, MacAddressForm } from "./components";
import useQuery from "../../hooks/useQuery";
import { handleDeviceList } from "../../helpers/handleDeviceList";
import { useEffect } from "react";
import useMutation from "../../hooks/useMutation";

const LandingPage = () => {
  const { data: listData, query: listQuery } = useQuery("/v1/devices");
  const {
    data: deviceData,
    query: deviceQuery,
    error: deviceError,
  } = useQuery("/v1/device");
  const { error: deleteError, mutate } = useMutation("DELETE", "/v1/device");

  useEffect(() => {
    listQuery();
  }, []);

  const devices = handleDeviceList(listData);
  const device = handleDeviceList(deviceData ? [deviceData] : []);

  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Accordian title="Cadastrar">
          <CreateForm />
        </Accordian>
        <Accordian title="Consultar">
          <MacAddressForm query={deviceQuery} error={!!deviceError} />
          {deviceData ? <List items={device} /> : null}
        </Accordian>
        <Accordian title="Listar">
          <List items={devices ?? []} />
        </Accordian>
        <Accordian title="Excluir">
          <MacAddressForm mutate={mutate} error={!!deleteError} />
        </Accordian>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default LandingPage;
