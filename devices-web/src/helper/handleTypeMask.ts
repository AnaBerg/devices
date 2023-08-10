import { DeviceType } from "../types/device";

export const handleTypeMask = (type: DeviceType) => {
  switch (type) {
    case "CAMERA":
      return "Câmera";
    case "REMOTE_CONTROL":
      return "Controle Remoto";
    case "SENSOR":
      return "Sensor";
  }
};
