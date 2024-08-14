const { defineConfig } = require("cypress");
require("dotenv").config();

export default defineConfig({
  chromeWebSecurity: false,
  blockHosts: ["https://events.backtrace.io/"],
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: process.env.BASE_URL,
    video: true,
    setupNodeEvents(on, config) {
      on("task", {
        logTestData(logMessage) {
          /*
            just a console log, but this is a demonstrative task an potentially
            can be an external logger lib or plugin
          */
          console.log(`Log task: "${logMessage}"`);
          return null;
        },
      });
      return config;
    },
    env: {
      VALID_USER: process.env.VALID_USER,
      PASSWORD: process.env.PASSWORD,
    },
  },
});
