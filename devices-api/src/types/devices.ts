export type DeviceType = "CAMERA" | "SENSOR" | "REMOTE_CONTROL";

export interface Device {
  name: string;
  type: DeviceType;
  serial: string;
  macAddress: string;
  id: string;
}
