module.exports = {
  "parser": "@typescript-eslint/parser",
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "plugins": [
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "react",
    "jsx-a11y",
  ],
  "extends": [
    "prettier",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:import/warnings",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/all"
  ],
  "rules": {
    "sort-imports": ["error", { "ignoreDeclarationSort": true }],
    "import/first": 2,
    "import/no-duplicates": 2,
    "import/order": 2,
    "import/newline-after-import": 2,
    "@typescript-eslint/no-use-before-define": [
      "error",
      { "functions": false, "variables": false }
    ],
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-var-requires": 0,
    "prettier/prettier": "error",
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/prefer-stateless-function": 2,
    "react/jsx-max-depth": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-handler-names": 1,
    "react/forbid-component-props": 0,
    "react/jsx-filename-extension": 0,
    "react/display-name": 2,
    "react/no-unused-prop-types": 2,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": 0,
    "react/no-multi-comp": 0,
  }
}
