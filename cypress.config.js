const { defineConfig } = require("cypress");
const { rmdir } = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        deleteDownloads() {
          console.log("deleting downloads");
          return new Promise((resolve) => {
            rmdir("cypress/downloads", { recursive: true }, () => {
              resolve(null);
            });
          });
        },
      });
    },
    baseUrl: "http://automationexercise.com",
    viewportHeight: 1080,
    viewportWidth: 1920,
    theme: "dark",
  },
});
