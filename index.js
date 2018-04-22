module.exports = {
    extends: [
        'airbnb',
        'plugin:flowtype/recommended',
        'prettier',
        'prettier/flowtype',
        'prettier/react',
    ],
    plugins: ['flowtype', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
    },
    rules: {
        'import/order': ['error', { 'newlines-between': 'always' }],
        'react/jsx-filename-extension': 'off',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
    },
};
