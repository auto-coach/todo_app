import { defineConfig } from 'cypress'






export default defineConfig({
  fixturesFolder: false,
  reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/report",
    "charts": true,
    "reportPageTitle": "todo test results",
    "saveHtml": true,
    "reportFilename": "index",
    "overwrite": true,
  },
  "video": false,
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'http://localhost:8888',
  },
})
