import { listDevices } from "../../services/devices";

import db from "../../mocks/database";
import { generateManyDeviceMock } from "../../mocks/device";
import {
  instanceOfDevice,
} from "../../helper/instanceOf";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The listDevices", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  it("should list all devices succesfully", async () => {
    const devices = generateManyDeviceMock(5);

    await db("devices").insert(devices);

    const devicesList = await listDevices();

    expect(instanceOfDevice((devicesList as Array<any>)?.[0])).toBeTruthy();
  });
});
