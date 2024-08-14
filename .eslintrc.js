import globals from "globals";
import pluginJs from "@eslint/js";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: "./tsconfig.json", // Point to your tsconfig.json
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.cypress, // Add Cypress globals
      },
    },
    env: {
      "cypress/globals": true, // This enables Cypress global variables
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      cypress: cypressPlugin,
    },
    rules: {
      ...pluginTs.configs.recommended.rules, // Use recommended rules for TypeScript
      ...cypressPlugin.configs.recommended.rules, // Use recommended rules for Cypress
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
];
