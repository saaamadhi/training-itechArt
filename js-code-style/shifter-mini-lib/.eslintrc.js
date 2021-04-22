module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb-base',
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
        "no-tabs": ["error", { allowIndentationTabs: true }],
        "func-names": ["error", "never"],
        "no-param-reassign": ["error", { "props": true }],
        "prefer-destructuring": ["error", { "object": true, "array": true }],
        "camelcase": 0,
        "no-use-before-define": ["error", { "functions": false, "variables": false }],
        "prefer-const": ["error", {"ignoreReadBeforeAssign": true}],
        "max-len": 0,
        "no-mixed-spaces-and-tabs": 0,
        "prefer-const": 0,
        "no-var": 0,
        "vars-on-top": 0,
        "prefer-rest-params": 0,
        "no-shadow": 0,
        "no-restricted-syntax": 0,
        "prefer-destructuring": 0,
        "consistent-return": 0,
        "no-continue": 0,
        "no-nested-ternary": 0,
        "no-undef": 0
    }
};
