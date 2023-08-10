import { Device } from "../types/device";
import { handleTypeMask } from "./handleTypeMask";

export const handleDeviceList = (devices: Array<Device>) => {
  return devices?.map(({ macAddress, name, serial, type }) => ({
    title: name,
    description: `${handleTypeMask(type)}, ${macAddress}, ${serial}`,
  }));
};
