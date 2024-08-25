import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // 自定义规则
      "no-var": "error", //禁止使用 var
      // "no-var": "off", //禁止使用 var
      // "no-console": "warn", // 禁止使用 console
      "@typescript-eslint/no-explicit-any": "error", // 禁止使用 any
      // '@typescript-eslint/no-explicit-any': 'off',
    },
    settings: {
      react: {
        version: "detect", // 自动检测 React 版本
      },
    },
    // ...
    ignores: [
      "node_modules/",
      "dist/",
      "*.min.js",
      "*.d.ts",
      ".history/",
      "**/.*",
    ],
  },
];
