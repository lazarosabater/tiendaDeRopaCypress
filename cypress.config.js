const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    allure: true,
  },
  e2e: {
      setupNodeEvents(on, config) {
          AllureWriter(on, config);
          return config;
      },
      baseUrl: 'http://automationpractice.com'
  }
});
