import globals from "globals";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import cypressPlugin from "eslint-plugin-cypress";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.cypress, // Include Cypress globals
      },
    },
  },
  {
    // Configuration specific to TypeScript files
    files: ["**/*.ts"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
      cypress: cypressPlugin,
    },
    rules: {
      "no-undef": "off", // Disable no-undef rule
      "@typescript-eslint/no-namespace": "off", // Disable no-unused-vars rule
      ...pluginTs.configs.recommended.rules, // Use recommended rules for TypeScript
      ...cypressPlugin.configs.recommended.rules, // Use recommended rules for Cypress
    },
    ignores: [
      "**/cypress.config.ts", // Ignore node_modules folder
      "**/cypress/support/e2e.ts", // Ignore specific folder
    ],
  },
  {
    // Configuration specific to JavaScript files
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    rules: {
      "no-undef": "off", // Disable no-undef rule for JS files
      "no-unused-vars": "off", // Disable no-unused-vars rule for JS files
    },
    ignores: [
      "**.eslintrc.js", // Ignore build output directory
    ],
  },
];
