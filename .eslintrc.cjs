const globals = require("globals");
const pluginJs = require("@eslint/js");
const daStyle = require("eslint-config-dicodingacademy");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ["**/*.cjs"],
  languageOptions: {
    sourceType: "module",
    globals: {
      ...globals.node,
      ...globals.browser,
    },
  },
  extends: ["eslint:recommended", pluginJs.configs.recommended, daStyle],
};
