import { Request } from "express";

import { getMockRes } from "@jest-mock/express";

import { deleteByMacAddress } from "../../controllers/devices";

import db from "../../mocks/database";
import { generateDeviceMock } from "../../mocks/device";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The deleteDeviceByMacAddress", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  const { res } = getMockRes();

  it("should delete the device with the correct mac address succefuly", async () => {
    const device = generateDeviceMock();
    const req = { body: { macAddress: device.macAddress } } as Request;

    await db("devices").insert(device);

    await deleteByMacAddress(req, res);

    expect(res.status).toBeCalledWith(200);
  });
  it("should delete no device if it doesn't find a device with the mac address", async () => {
    const { macAddress } = generateDeviceMock();
    const req = { body: { macAddress } } as Request;

    await deleteByMacAddress(req, res);

    expect(res.status).toBeCalledWith(404);
  });
});
