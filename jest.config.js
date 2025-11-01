export default {
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.js"],
  collectCoverageFrom: [
    "src/**/*.js",
    "!**/node_modules/**",
    "!src/scripts/pbta-player-relationships.js",
    "!src/scripts/relationship-viewer.js",
    "!src/scripts/constants.js",
  ],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      lines: 95,
    },
  },
};
