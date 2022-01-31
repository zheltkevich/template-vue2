module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'standard',
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 6,
        ecmaFeatures: { modules: true },
    },
    plugins: [
        'vue',
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'comma-dangle': ['error', 'always-multiline'],
        'quote-props': ['error', 'consistent-as-needed'],
        'space-before-function-paren': ['error', 'never'],
        'no-unused-vars': ['error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '_',
            },
        ],

        // plugin:vue/recommended
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: true,
        }],
        'vue/require-default-prop': 'error',
    },
};
