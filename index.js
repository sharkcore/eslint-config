module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  plugins: ['flowtype', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    es6: true,
  },
  rules: {
    // Enforce indent size of 4 spaces to conform to shark standards
    indent: ['error', 4],
    'react/jsx-indent': ['error', 4],

    quotes: [
      'error',
      'single',
      {avoidEscape: true, allowTemplateLiterals: true},
    ],
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
