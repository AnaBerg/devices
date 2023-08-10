import { Request, Response } from "express";

import {
  createDevice,
  deleteDeviceByMacAddress,
  findDeviceByMacAddress,
  listDevices,
} from "../services/devices";

import { Device } from "../types/devices";
import {
  instanceOfResponseError,
  instanceOfDevice,
} from "../helper/instanceOf";

export const create = async (request: Request, response: Response) => {
  const device = request.body as Omit<Device, "id">;

  const newDevice = await createDevice(device);

  if (instanceOfDevice(newDevice)) {
    response.status(201).json(newDevice);
  } else if (instanceOfResponseError(newDevice)) {
    response.status(newDevice.status).json({ message: newDevice.message });
  } else {
    response.status(500).json({
      message: "An error occured while creating new device :: Error not mapped",
    });
  }
};

export const findByMacAddress = async (
  request: Request,
  response: Response
) => {
  const { macAddress } = request.query as { macAddress: string };

  const device = await findDeviceByMacAddress(macAddress);

  if (instanceOfDevice(device)) {
    response.status(200).json(device);
  } else if (instanceOfResponseError(device)) {
    response.status(device.status).json({ message: device.message });
  } else {
    response.status(500).json({
      message: "An error occured while finding new device :: Error not mapped",
    });
  }
};

export const list = async (_: Request, response: Response) => {
  const devices = await listDevices();

  if ((devices as Array<any>)?.length === 0) {
    response.status(200).json(devices);
  } else if (instanceOfDevice((devices as Array<any>)?.[0])) {
    response.status(200).json(devices);
  } else if (instanceOfResponseError(devices)) {
    response.status(devices.status).json({ message: devices.message });
  } else {
    response.status(500).json({
      message: "An error occured while listing new device :: Error not mapped",
    });
  }
};

export const deleteByMacAddress = async (
  request: Request,
  response: Response
) => {
  const { macAddress } = request.body as { macAddress: string };

  const confirmation = await deleteDeviceByMacAddress(macAddress);

  if (typeof confirmation === "boolean") {
    response.status(200).json({ deleted: confirmation });
  } else if (instanceOfResponseError(confirmation)) {
    response
      .status(confirmation.status)
      .json({ message: confirmation.message });
  } else {
    response.status(500).json({
      message: "An error occured while deleting new device :: Error not mapped",
    });
  }
};
