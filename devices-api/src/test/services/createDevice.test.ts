import { createDevice } from "../../services/devices";

import db from "../../mocks/database";
import { generateDeviceMock } from "../../mocks/device";
import {
  instanceOfDevice,
  instanceOfResponseError,
} from "../../helper/instanceOf";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The createDevice", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  it("should create a new device succefully", async () => {
    const device = generateDeviceMock(false);
    const newDevice = await createDevice(device);

    expect(instanceOfDevice(newDevice)).toBeTruthy();

    if (instanceOfDevice(newDevice)) {
      expect(newDevice.macAddress).toMatch(device.macAddress);
      expect(newDevice.name).toMatch(device.name);
      expect(newDevice.serial).toMatch(device.serial);
      expect(newDevice.type).toMatch(device.type);
    }
  });
  it("should not create a new device if the fields are null", async () => {
    const device = generateDeviceMock(false, {
      macAddress: null,
      name: null,
      serial: null,
      type: null,
    });
    const newDevice = await createDevice(device);

    expect(instanceOfResponseError(newDevice)).toBeTruthy();
  });
});
