import { Request } from "express";
import { getMockRes } from "@jest-mock/express";

import { create } from "../../controllers/devices";

import db from "../../mocks/database";
import { generateDeviceMock } from "../../mocks/device";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The createDevice", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  const { res } = getMockRes();

  it("should create a new device succefully", async () => {
    const device = generateDeviceMock(false);
    const req = { body: device } as Request;

    await create(req, res);

    expect(res.status).toBeCalledWith(201);
  });

  it("should not create a new device if the fields are null", async () => {
    const device = generateDeviceMock(false, {
      macAddress: null,
      name: null,
      serial: null,
      type: null,
    });
    const req = { body: device } as Request;

    await create(req, res);

    expect(res.status).toBeCalledWith(500);
  });
});
