//import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://automationteststore.com',
    watchForFileChanges: false,
    video:true,
    screenshotOnRunFailure: true,
    //reporter: 'mochawesome',
    reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config);
      return config;

    },
  },
});
