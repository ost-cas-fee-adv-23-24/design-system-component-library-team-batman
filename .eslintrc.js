const config = {
  rules: {
    'prettier/prettier': 0,
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  extends: ['plugin:storybook/recommended', '@smartive/eslint-config', 'plugin:import/typescript'],
};

module.exports = config;
