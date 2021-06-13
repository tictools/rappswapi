const RULES = {
  WARNING: "warning",
  ERROR: "error",
  OFF: "off",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    camelcase: RULES.OFF,
    "no-undef": RULES.OFF,
  },
};
