import { Device } from "../types/devices";
import { ResponseError } from "../types/responses";

export const instanceOfResponseError = (object: any): object is ResponseError =>
  "status" in object;

export const instanceOfDevice = (object: any): object is Device => {
  return "macAddress" in object;
};
