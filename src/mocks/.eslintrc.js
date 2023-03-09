module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: ['*.test.ts', '*.test.tsx', '*.ts'],
      },
    ],
  },
};
