// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    ignores: ['dist/', '.astro/', 'node_modules/', 'public/'],
  },
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
];
