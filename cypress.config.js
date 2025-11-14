import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as dotenv from "dotenv";

dotenv.config(); // 🔹 Carrega as variáveis do .env

export default defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: "https://automationexercise.com",
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    env: {
      login_email: process.env.CYPRESS_LOGIN_EMAIL,
      login_password: process.env.CYPRESS_LOGIN_PASSWORD,
      namecard: process.env.NAMECARD,
      numbercard: process.env.NUMBERCARD,
      cvc: process.env.CVC,
      monthvalidate: process.env.MONTHVALIDATE,
      yearvalidate: process.env.YEARVALIDATE,
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
