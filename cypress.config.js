const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //numTestsKeptInMemory :0,
  projectId: "hm7zhg",
  hideXHR: true,
  includeShadowDom: true,
  chromeWebSecurity: false,
  defaultCommandTimeout	:10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
