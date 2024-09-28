// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Ігноруємо папку dist
  },
  {
    files: ['**/*.{js,jsx}'], // Працюємо з усіма JS/JSX файлами
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Використовуємо глобальні змінні для браузера
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module', // Вказуємо модульний тип коду
      },
    },
    settings: {
      react: {
        version: '18.3', // Встановлюємо версію React
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules, // Рекомендовані правила ESLint
      ...react.configs.recommended.rules, // Рекомендовані правила для React
      ...react.configs['jsx-runtime'].rules, // Правила для JSX
      ...reactHooks.configs.recommended.rules, // Рекомендовані правила для хуків
      'react/jsx-no-target-blank': 'off', // Вимкнення правила для target="_blank"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Попередження для рефреш-плагіна
      ],
    },
  },
];
