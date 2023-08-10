module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/database/**/*",
    "!src/test/**/*",
    "!src/*.ts",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
