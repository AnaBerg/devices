import { deleteDeviceByMacAddress } from "../../services/devices";

import db from "../../mocks/database";
import { generateDeviceMock } from "../../mocks/device";
import { instanceOfResponseError } from "../../helper/instanceOf";

jest.mock("../../database/database", () => require("../../mocks/database"));

describe("The deleteDeviceByMacAddress", () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
  });

  it("should delete the device with the correct mac address succefuly", async () => {
    const device = generateDeviceMock();

    await db("devices").insert(device);

    const confirmation = await deleteDeviceByMacAddress(device.macAddress);

    expect(typeof confirmation === "boolean").toBeTruthy();
  });
  it("should delete no device if it doesn't find a device with the mac address", async () => {
    const { macAddress } = generateDeviceMock();

    const confirmation = await deleteDeviceByMacAddress(macAddress);

    expect(instanceOfResponseError(confirmation)).toBeTruthy();
  });
});
