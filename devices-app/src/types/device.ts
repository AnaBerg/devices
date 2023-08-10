export type DeviceType = "CAMERA" | "SENSOR" | "REMOTE_CONTROL";

export type Device = {
  name: string;
  type: DeviceType;
  serial: string;
  macAddress: string;
};
