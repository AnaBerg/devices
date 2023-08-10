import { v4 as uuid } from "uuid";

import db from "../database/database";

import { Device } from "../types/devices";
import { ResponseError } from "../types/responses";

export const createDevice = async (
  device: Omit<Device, "id">
): Promise<Device | ResponseError> => {
  const transaction = await db.transaction();
  const newDevice = { id: uuid(), ...device };

  try {
    await transaction("devices").insert(newDevice);
    await transaction.commit();
    return newDevice;
  } catch (e) {
    const error = e as Error;
    return {
      status: 500,
      message: `An error occured while creating new device :: Error: ${error.message}`,
    } as ResponseError;
  }
};

export const findDeviceByMacAddress = async (
  macAddress: string
): Promise<Device | ResponseError> => {
  try {
    const device = await db("devices").where({ macAddress });

    if (device.length === 0) {
      return {
        status: 404,
        message: `An error occured while find device by mac address :: Error: device not found`,
      } as ResponseError;
    }

    return device[0] as Device;
  } catch (e) {
    const error = e as Error;
    return {
      status: 500,
      message: `An error occured while find device by mac address :: Error: ${error.message}`,
    } as ResponseError;
  }
};

export const listDevices = async (): Promise<Array<Device> | ResponseError> => {
  try {
    const devices = await db("devices");

    return devices as Array<Device>;
  } catch (e) {
    const error = e as Error;
    return {
      status: 500,
      message: `An error occured while list devices :: Error: ${error.message}`,
    } as ResponseError;
  }
};

export const deleteDeviceByMacAddress = async (
  macAddress: string
): Promise<boolean | ResponseError> => {
  try {
    const deletedDevice = await db("devices").where({ macAddress }).del();

    if (deletedDevice === 1) {
      return true;
    } else {
      return {
        status: 404,
        message: `An error occured while deleting device by mac address :: Error: device not found`,
      } as ResponseError;
    }
  } catch (e) {
    const error = e as Error;
    return {
      status: 500,
      message: `An error occured while deleting device by mac address :: Error: ${error.message}`,
    } as ResponseError;
  }
};
