module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [],
    "rules": {
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "overrides": {
                    "constructors": "off"
                }
            }
        ],
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-use-before-declare": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "guard-for-in": "error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-functions": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "one-var": "error",
        "prefer-const": "error",
        "radix": "error",
        "some-rule": "error",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rulesDirectory": [
                    "[some-path]/node_modules/tslint-eslint-rules/dist/rules",
                    "[some-path]/node_modules/codelyzer"
                ],
                "rules": {
                    "comment-format": [
                        true,
                        "check-space"
                    ],
                    "component-class-suffix": true,
                    "deprecation": true,
                    "directive-class-suffix": true,
                    "import-blacklist": [
                        true,
                        "rxjs/Rx"
                    ],
                    "import-spacing": true,
                    "max-line-length": [
                        true,
                        140
                    ],
                    "no-input-rename": true,
                    "no-output-on-prefix": true,
                    "no-output-rename": true,
                    "no-redundant-jsdoc": true,
                    "no-shadowed-variable": true,
                    "no-trailing-whitespace": true,
                    "no-unused-expression": true,
                    "no-unused-variable": true,
                    "one-line": [
                        true,
                        "check-open-brace",
                        "check-catch",
                        "check-else",
                        "check-whitespace"
                    ],
                    "quotemark": [
                        true,
                        "single"
                    ],
                    "semicolon": [
                        true,
                        "always"
                    ],
                    "ter-indent": [
                        true,
                        4,
                        {
                            "SwitchCase": 1
                        }
                    ],
                    "trailing-comma": [
                        true,
                        {
                            "multiline": "always",
                            "singleline": "never"
                        }
                    ],
                    "triple-equals": [
                        true,
                        "allow-null-check"
                    ],
                    "use-host-property-decorator": true,
                    "use-input-property-decorator": true,
                    "use-life-cycle-interface": true,
                    "use-output-property-decorator": true,
                    "use-pipe-transform-interface": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type"
                    ]
                }
            }
        ]
    },
    "globals": {},
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "settings": {}
};
