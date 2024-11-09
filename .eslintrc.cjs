import globals from "globals";
import pluginJs from "@eslint/js";
import daStyle from "eslint-config-dicodingacademy";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.cjs"],
  languageOptions: {
    sourceType: "module", // Menunjukkan kita menggunakan ESM
    globals: {
      ...globals.node,  // Menambahkan globals untuk server-side (Node.js)
      ...globals.browser,  // Jika ingin juga mendukung browser, bisa ditambahkan
    },
  },
  extends: ["eslint:recommended", pluginJs.configs.recommended, daStyle],
};