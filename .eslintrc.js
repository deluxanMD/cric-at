module.exports = {
  extends: ['expo', 'prettier', 'universal'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.jsx', '**/*.d.ts'],
      env: {
        jest: true,
      },
    },
  ],
};
