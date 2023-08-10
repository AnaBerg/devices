import * as dotenv from "dotenv";

dotenv.config();

const knexConfig = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
  production: {
    client: process.env.DB_CLIENT,
    connection: process.env.DB_URL,
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};

export default knexConfig;
