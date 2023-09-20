const config = {
  rules: {
    'prettier/prettier': 0,
    'check-file/no-index': 0,
    'check-file/folder-match-with-fex': 0,
    'check-file/filename-blocklist': [
      'error',
      { 'src/components/**/*.stories.ts': '*.stories.tsx', 'src/components/**/index.tsx': '*.ts' },
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        'src/**/*.{ts,tsx,js,jsx}': 'KEBAB_CASE',
      },
      { ignoreMiddleExtensions: true },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/components/**/': 'KEBAB_CASE',
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  plugins: ['check-file'],
  extends: ['plugin:storybook/recommended', '@smartive/eslint-config', 'plugin:import/typescript'],
};

module.exports = config;
