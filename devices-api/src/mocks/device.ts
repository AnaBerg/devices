import { faker } from "@faker-js/faker";
import { Device, DeviceType } from "../types/devices";

const generateDeviceTypeMock = (): DeviceType => {
  const num = faker.number.int({ min: 1, max: 3 });

  if (num === 1) {
    return "CAMERA";
  } else if (num === 2) {
    return "REMOTE_CONTROL";
  } else {
    return "SENSOR";
  }
};

export const generateDeviceMock = (
  withId = true,
  override = {}
): Device | Omit<Device, "id"> => {
  if (withId) {
    return {
      id: faker.string.uuid(),
      macAddress: faker.internet.mac(),
      name: faker.lorem.word(),
      serial: faker.number.int({ min: 10000, max: 99999 }).toString(),
      type: generateDeviceTypeMock(),
      ...override,
    };
  } else {
    return {
      macAddress: faker.internet.mac(),
      name: faker.lorem.word(),
      serial: faker.number.int({ min: 10000, max: 99999 }).toString(),
      type: generateDeviceTypeMock(),
      ...override,
    };
  }
};

export const generateManyDeviceMock = (
  length = 1,
  withId = true,
  override = {}
) => Array.from({ length }, () => generateDeviceMock(withId, override));
