const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //numTestsKeptInMemory :0,
  hideXHR: true,
  includeShadowDom: true,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
