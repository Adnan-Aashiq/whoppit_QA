const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  numTestsKeptInMemory :0,
  projectId: "hm7zhg",
  hideXHR: true,
  includeShadowDom: true,
  chromeWebSecurity: false,
  defaultCommandTimeout	:10000,
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
