import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },

  eslintConfigPrettier,

  {
    rules: {
      'constructor-super': 'warn',
      'getter-return': 'warn',
      'no-dupe-args': 'warn',
      'no-irregular-whitespace': [
        'warn',
        {
          skipComments: true,
        },
      ],
    },
  },
]);
