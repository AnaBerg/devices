import { Knex } from "knex";

export const up = (knex: Knex) =>
  knex.schema.createTable("devices", (table) => {
    table.uuid("id").notNullable().unique();
    table.string("name").notNullable();
    table.string("serial").notNullable();
    table.string("macAddress").notNullable();
    table.string("type").notNullable();
  });

export const down = (knex: Knex) => knex.schema.dropTableIfExists("devices");
