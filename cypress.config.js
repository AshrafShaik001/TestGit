const { defineConfig } = require("cypress");
const { installPlugin } = require("@chromatic-com/cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config);
    },

    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
  },
});
