// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import unicorn from 'eslint-plugin-unicorn';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwind from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * Toggle this to false if you do NOT want type-aware rules (faster, fewer checks).
 * When true, ESLint will use parserOptions.project pointing to tsconfig.eslint.json
 */
const TYPE_AWARE = true;

export default defineConfig([
  // Ignore build outputs and generated files
  globalIgnores([
    'dist',
    'build',
    '.yarn',
    'node_modules',
    // Orval outputs (adjust to your paths)
    'src/api/model/**',
  ]),
  reactHooks.configs.flat['recommended-latest'],
  // Base JS & TS setup
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: TYPE_AWARE
        ? {
            // Type-aware mode
            project: ['./tsconfig.eslint.json'],
            tsconfigRootDir: import.meta.dirname ?? process.cwd(),
            ecmaFeatures: { jsx: true },
          }
        : {
            // Non type-aware (faster)
            ecmaFeatures: { jsx: true },
          },
    },
    settings: {
      // For eslint-plugin-react
      react: { version: 'detect' },
      // For eslint-plugin-import resolver (TypeScript)
      'import/resolver': {
        typescript: {
          project: TYPE_AWARE ? './tsconfig.eslint.json' : './tsconfig.json',
        },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
      // For eslint-plugin-tailwindcss
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl'],
        config: 'tailwind.config.js',
      },
    },
    plugins: {
      react,
      'react-refresh': reactRefresh,
      import: importPlugin,
      unicorn,
      'jsx-a11y': jsxA11y,
      tailwind,
      // Note: we don't add "prettier" plugin; we only extend "eslint-config-prettier".
    },
    extends: [
      js.configs.recommended,
      // TS: choose recommended or recommendedTypeChecked based on TYPE_AWARE
      ...(TYPE_AWARE ? [tseslint.configs.recommendedTypeChecked] : [tseslint.configs.recommended]),
      // React
      'plugin:react/recommended',
      // React Hooks (Flat config from plugin)
      reactHooks.configs.recommended,
      // React Refresh (Vite)
      reactRefresh.configs.vite,
      // a11y
      'plugin:jsx-a11y/recommended',
      // Import hygiene
      'plugin:import/recommended',
      'plugin:import/typescript',
      // Unicorn best practices
      'plugin:unicorn/recommended',
      // Tailwind linting
      'plugin:tailwindcss/recommended',
      // Disable rules that conflict with Prettier formatting
      'eslint-config-prettier',
    ],
    rules: {
      /* --- General & TS rules --- */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      // Stricter TS checks (you can relax as needed)
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off', // enable if you want stricter APIs
      '@typescript-eslint/no-floating-promises': TYPE_AWARE ? 'error' : 'off',
      '@typescript-eslint/no-misused-promises': TYPE_AWARE ? 'error' : 'off',
      '@typescript-eslint/restrict-template-expressions': TYPE_AWARE ? 'warn' : 'off',

      /* --- React rules --- */
      'react/jsx-uses-react': 'off', // not needed with new JSX transform
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // using TypeScript instead
      'react/no-unknown-property': ['error', { ignore: ['css'] }], // emotion-style ignore example

      /* --- React Hooks --- */
      // already covered by reactHooks.configs.recommended

      /* --- React Refresh --- */
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      /* --- Import rules --- */
      'import/no-unresolved': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.{ts,tsx}', '**/vite.config.ts', '**/eslint.config.ts'],
        },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      /* --- Unicorn (fine-tuned) --- */
      'unicorn/prevent-abbreviations': 'off', // React/TS often uses abbreviations like props, ref, ctx
      'unicorn/filename-case': [
        'warn',
        { cases: { camelCase: true, pascalCase: true, kebabCase: true } },
      ],
      'unicorn/no-null': 'off',

      /* --- JSX a11y --- */
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],

      /* --- Tailwind --- */
      // Works alongside prettier-plugin-tailwindcss. This validates class names and recommended patterns.
      'tailwindcss/classnames-order': 'off', // Prettier plugin already sorts classnames
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    files: ['*.config.{js,cjs,mjs,ts}', 'vite.config.{js,ts}', 'eslint.config.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      globals: { ...globals.node },
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },

  {
    files: ['**/*.{test,spec}.{ts,tsx}'],

    rules: {
      'unicorn/no-empty-file': 'off',
      '@typescript-eslint/no-unsafe-assignment': TYPE_AWARE ? 'off' : 'off',
    },
  },
]);
