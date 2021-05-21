module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ["airbnb", "./index", "prettier", "prettier/react", "plugin:prettier/recommended"],
    rules: {
        "react/jsx-filename-extension": 0,
        "react/react-in-jsx-scope": 0,
        "no-underscore-dangle": 0,
        "react/jsx-props-no-spreading": 0,
    },
};
