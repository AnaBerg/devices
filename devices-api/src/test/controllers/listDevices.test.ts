import { Request } from "express";

import { getMockRes } from "@jest-mock/express";

import { list } from "../../controllers/devices";

import db from "../../mocks/database";
import { generateManyDeviceMock } from "../../mocks/device";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The listDevices", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  const { res } = getMockRes();

  it("should list all devices succesfully", async () => {
    const devices = generateManyDeviceMock(5);
    const req = {} as Request;
    await db("devices").insert(devices);

    await list(req, res);

    expect(res.status).toBeCalledWith(200);
  });
});
