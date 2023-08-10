import { Knex } from "knex";

import { generateManyDeviceMock } from "../../mocks/device";

export const seed = async (knex: Knex) => {
  const devices = generateManyDeviceMock(4);
  await knex("devices").del();
  return await knex("devices").insert(devices);
};
