module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'newline-before-return': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'ignoreRestSiblings': true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'default',
        'format': ['camelCase'],
      },
      {
        'selector': ['variable'],
        'modifiers': ['const'],
        'format': ['UPPER_CASE', 'camelCase', 'PascalCase'],
      },
      {
        'selector': ['variable'],
        'format': ['camelCase'],
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase'],
      },
      {
        'selector': ['property'],
        'modifiers': ['static'],
        'format': ['UPPER_CASE'],
      },
      {
        'selector': ['enumMember'],
        'format': ['UPPER_CASE'],
      },
    ],
    'max-len': [1, 180, 2, {
      'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
      'ignoreUrls': true,
    }],
  },
};
