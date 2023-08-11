export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/index.ts(x)?",
    "!src/main.tsx",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
