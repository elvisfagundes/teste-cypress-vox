const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterConfigOptions: {
      charts: true,
      reportPageTitle: 'Relatório de Testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }      
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/v1/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on),
      new GenerateCtrfReport({
        on,
      })
    },
    
  },
  env: {
    usernameStandardUser: 'standard_user',
    usernameLockedOutUser: 'locked_out_user',
    usernameProblemUser: 'problem_user',
    usernamePerformanceGlichUser: 'performance_glitch_user',
    password: 'secret_sauce'
  },
});
