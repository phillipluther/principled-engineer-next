module.exports = {
  // extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unescaped-entities': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
