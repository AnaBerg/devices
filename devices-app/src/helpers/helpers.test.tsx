import { handleTypeMask } from "./handleTypeMask";
import { handleDeviceList } from "./handleDeviceList";
import { Device } from "../types/device";

describe("Helpers", () => {
  it("handleTypeMask should return the right mask", () => {
    const camera = handleTypeMask("CAMERA");
    const remoreControl = handleTypeMask("REMOTE_CONTROL");
    const sensor = handleTypeMask("SENSOR");

    expect(camera).toMatch("Câmera");
    expect(remoreControl).toMatch("Controle Remoto");
    expect(sensor).toMatch("Sensor");
  });
  it("handleDeviceList should format the device list", () => {
    const devices = [
      {
        name: "name",
        type: "SENSOR",
        serial: "123456",
        macAddress: "70:85:C2:F6:49:26",
      },
    ] as Array<Device>;

    const list = handleDeviceList(devices);

    expect(list[0].title).toMatch(devices[0].name);
    expect(list[0].description).toMatch(
      `${handleTypeMask(devices[0].type)}, ${devices[0].macAddress}, ${
        devices[0].serial
      }`
    );
  });
});
