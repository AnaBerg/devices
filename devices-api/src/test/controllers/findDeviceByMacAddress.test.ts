import { Request } from "express";
import { getMockRes } from "@jest-mock/express";

import { findByMacAddress } from "../../controllers/devices";

import db from "../../mocks/database";
import { generateDeviceMock } from "../../mocks/device";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The deleteDeviceByMacAddress", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  const { res } = getMockRes();

  it("should find the correct device by it's mac address", async () => {
    const device = generateDeviceMock();
    const req = { body: { macAddress: device.macAddress } } as Request;
    await db("devices").insert(device);

    await findByMacAddress(req, res);

    expect(res.status).toBeCalledWith(200);
  });
  it("should not find the correct device if the device doesn't exist", async () => {
    const device = generateDeviceMock();
    const req = { body: { macAddress: device.macAddress } } as Request;

    await findByMacAddress(req, res);

    expect(res.status).toBeCalledWith(404);
  });
});
