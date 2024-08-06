module.exports = {
  extends: ["@yieldhive/eslint-config/next.js"],
  rules: {
    "@typescript-eslint/naming-convention": "off",
    "no-console": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^TABS$" },
    ],
    "no-irregular-whitespace": "off",
    "@typescript-eslint/no-misused-promises": "off",
  },
};
