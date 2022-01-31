module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/standard',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'quote-props': ['error', 'consistent-as-needed'],
        'no-unused-vars': ['error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '_',
            },
        ],
        'space-before-function-paren': ['error', 'never'],

        // // ========= Vue =========
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/attribute-hyphenation': ['error', 'never'],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: true,
        }],
        'vue/require-default-prop': 'error',
    },
};
