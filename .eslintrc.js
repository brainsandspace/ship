module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['import', 'redux-saga', 'react', 'jsx-a11y'],
  globals: {
    NODE_ENV: true,
    describe: true,
    it: true,
    expect: true,
  },
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'import/first': 2,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
        ],
      'newlines-between': 'always'
      },
    ],
    "react/jsx-filename-extension": 0,
    'linebreak-style': 0,//['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': 'error',
  },
};
