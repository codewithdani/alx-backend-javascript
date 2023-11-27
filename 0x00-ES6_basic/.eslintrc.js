module.exports = {
    env: {
      node: true,
      jest: true,
    },
    extends: ['airbnb-base'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'linebreak-style': 'off',
      'no-console': 'off',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
    },
  };