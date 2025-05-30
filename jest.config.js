module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|mjs|html|js)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["node_modules/(?!(@angular|ng2-charts|chart.js)/)"],
  extensionsToTreatAsEsm: [".ts"],
  globals: {},
  collectCoverage: true,
  coverageReporters: ["html", "text-summary"],
  moduleFileExtensions: ["ts", "html", "js", "json"],
};
