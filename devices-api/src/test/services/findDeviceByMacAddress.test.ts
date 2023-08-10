import { findDeviceByMacAddress } from "../../services/devices";

import db from "../../mocks/database";
import { generateDeviceMock } from "../../mocks/device";
import {
  instanceOfDevice,
  instanceOfResponseError,
} from "../../helper/instanceOf";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The findDeviceByMacAddress", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  it("should find the correct device by it's mac address", async () => {
    const device = generateDeviceMock();
    await db("devices").insert(device);

    const foundUser = await findDeviceByMacAddress(device.macAddress);

    expect(instanceOfDevice(foundUser)).toBeTruthy();
    if (instanceOfDevice(foundUser)) {
      expect(foundUser.macAddress).toMatch(device.macAddress);
      expect(foundUser.name).toMatch(device.name);
      expect(foundUser.serial).toMatch(device.serial);
      expect(foundUser.type).toMatch(device.type);
    }
  });
  it("should not find the correct device if the device doesn't exist", async () => {
    const { macAddress } = generateDeviceMock();
    const foundUser = await findDeviceByMacAddress(macAddress);

    expect(instanceOfResponseError(foundUser)).toBeTruthy();
  });
});
