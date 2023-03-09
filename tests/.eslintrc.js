module.exports = {
  extends: ['plugin:codeceptjs/recommended', 'plugin:playwright/playwright-test'],
  env: {
    jest: false,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
