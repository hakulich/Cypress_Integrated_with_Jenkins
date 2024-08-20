const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("cypress\\config", `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  e2e: {
    projectId: "4gsyis",
    // Run in Dashboard
    //npx cypress run --record --key 7e9b6f1a-f5c7-4545-9d35-eb46dbf60efe
    specPattern: "cypress/all-tests/**/*.{js,jsx,ts,tsx}",
    //SCREENSHOT CAPTION
    // screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    //VIDEO CAPTION
    // video: true,
    //SET SCREEN RESOLUTION
    //viewportHeight: 1080,
    //viewportWidth: 1920,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 1,
    },
    env: {
      automationTestStore: "https://www.automationteststore.com/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // accept a configFile value or use development by default
      const file = config.env.configFile || "";
      return getConfigurationByFile(file);
    },
  },
});
