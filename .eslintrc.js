/*
 * @Author: randy randy7100@outlook.com
 * @Date: 2022-10-05 22:24:42
 * @LastEditors: randy randy7100@outlook.com
 * @LastEditTime: 2022-10-05 23:19:26
 * @FilePath: \tampermonkey-script\.eslintrc.js
 * @Description:  配置参考：https://eslint.bootcss.com/docs/user-guide/configuring
 */
// import { defineConfig } from 'eslint-define-config';
import { defineConfig } from "eslint-define-config";

export default defineConfig({
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {},
  parser: "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prefer-const": "warn",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
        jest: true,
      },
    },
  ],
});
