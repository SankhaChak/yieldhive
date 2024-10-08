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
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "unicorn/filename-case": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "no-bitwise": "off",
    "@typescript-eslint/array-type": "off",
  },
};
