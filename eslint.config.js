/**
 * ESLint 配置文件（Flat Config 格式）
 * ESLint 9.x 使用新的配置文件格式
 * 参考文档: https://eslint.org/docs/latest/use/configure/configuration-files
 */

import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // 使用推荐的 JavaScript 基础规则
  js.configs.recommended,

  // 全局忽略文件
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      'coverage/**',
      '*.config.js',
      '*.config.ts',
    ],
  },

  // TypeScript 和 JavaScript 文件配置
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // 浏览器环境全局变量
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Node.js 环境全局变量（如果需要）
        // process: 'readonly',
        // __dirname: 'readonly',
        // __filename: 'readonly',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      // Prettier 规则（使用 prettier/recommended）
      'prettier/prettier': 'error',

      // React 规则
      'react/react-in-jsx-scope': 'off', // React 17+ 不需要导入 React
      'react/prop-types': 'off', // TypeScript 中不需要 prop-types
      'react/display-name': 'off', // 不需要强制 displayName

      // React Hooks 规则
      'react-hooks/rules-of-hooks': 'error', // 检查 Hooks 规则
      'react-hooks/exhaustive-deps': 'warn', // 检查 effect 依赖

      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any 类型
      '@typescript-eslint/explicit-function-return-type': 'off', // 不强制显式返回类型

      // 通用规则
      'no-console': ['warn', { allow: ['warn', 'error'] }], // 允许 warn 和 error
      'no-debugger': 'warn', // 警告使用 debugger
      'no-unused-vars': 'off', // 关闭基础规则，使用 TypeScript 版本
      'prefer-const': 'error', // 优先使用 const
      'no-var': 'error', // 禁止使用 var
    },
    settings: {
      react: {
        version: 'detect', // 自动检测 React 版本
      },
    },
  },

  // JavaScript/JSX 文件特殊配置
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      // JS 文件可以稍微宽松一些
    },
  },

  // TypeScript/TSX 文件特殊配置
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TS 文件可以使用更严格的规则
      '@typescript-eslint/no-explicit-any': 'error', // TS 文件中禁止 any
    },
  },

  // 配置文件特殊规则
  {
    files: ['*.config.{js,ts}', '*.config.*.{js,ts}'],
    rules: {
      'no-console': 'off', // 配置文件中允许 console
      '@typescript-eslint/no-var-requires': 'off', // 允许 require
    },
  },

  // 使用 Prettier 配置来禁用冲突的 ESLint 规则
  prettierConfig,
];

