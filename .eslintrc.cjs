module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        extensions: [".js", ".vue", ".ts", ".d.ts"],
      },
      alias: {
        extensions: [".vue", ".js", ".ts", ".scss", ".d.ts", ".jsx", ".tsx"],
        map: [
          ["@/components", "./src/components"],
          ["@/pages", "./src/pages"],
          ["@/router", "./src/router"],
          ["@/store", "./src/store"],
          ["@/styles", "./src/styles"],
          ["@/types", "./src/types"],
          ["@/utils", "./src/utils"],
        ],
      },
    },
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
};
