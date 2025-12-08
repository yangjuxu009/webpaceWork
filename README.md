# Webpack + React 应用

基于 Webpack 5 和 React 19 构建的现代化前端应用脚手架。

## ✨ 功能特性

- ✅ **Webpack 5** - 最新版本的模块打包工具
- ✅ **React 19** - 最新版本的 React 框架
- ✅ **TypeScript 支持** - 完整的 TypeScript 支持（.ts, .tsx）
- ✅ **Sass/SCSS 支持** - 强大的 CSS 预处理器
- ✅ **Less 支持** - 另一种流行的 CSS 预处理器
- ✅ **Babel** - ES6+ 和 JSX 语法转换
- ✅ **热模块替换 (HMR)** - 开发时实时更新
- ✅ **代码分割** - 自动优化打包体积
- ✅ **路径别名** - 简化导入路径
- ✅ **Source Map** - 便于调试
- ✅ **生产优化** - 自动压缩和优化

## 📋 项目结构

```
webpackWork/
├── public/              # 静态资源目录
│   └── index.html      # HTML 模板
├── src/                # 源代码目录
│   ├── components/     # React 组件（可创建）
│   ├── utils/          # 工具函数（可创建）
│   ├── assets/         # 静态资源（可创建）
│   ├── App.jsx         # 主应用组件
│   ├── index.jsx       # 应用入口文件
│   └── index.css       # 全局样式
├── dist/               # 构建输出目录（自动生成）
├── node_modules/       # 依赖包目录
├── .gitignore          # Git 忽略文件
├── .vscode/            # VS Code 配置
├── package.json        # 项目配置和依赖
├── tsconfig.json       # TypeScript 配置
├── webpack.config.js   # Webpack 配置文件
└── README.md           # 项目说明文档
```

## 🚀 快速开始

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 pnpm（推荐）
pnpm install

# 使用 yarn
yarn install
```

### 开发运行

```bash
# 启动开发服务器（默认端口 8080）
npm run dev

# 或使用
npm start

# 使用 pnpm
pnpm dev

# 使用 yarn
yarn dev
```

访问 http://localhost:8080 查看应用。

### 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `dist` 目录。

### 清理构建产物

```bash
npm run clean
```

## 📦 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm start` | 启动开发服务器并自动打开浏览器 |
| `npm run build` | 构建生产版本 |
| `npm run clean` | 清理构建产物和缓存 |
| `npm run lint` | 运行代码检查（待配置） |

## 🔧 配置说明

### Webpack 配置

配置文件：`webpack.config.js`

主要配置项：
- **入口文件**: `src/index` (支持 .tsx, .ts, .jsx, .js)
- **输出目录**: `dist/`
- **开发服务器**: `http://localhost:8080`
- **路径别名**: 
  - `@` → `src/`
  - `@components` → `src/components/`
  - `@utils` → `src/utils/`
  - `@assets` → `src/assets/`
  - `@styles` → `src/styles/`

### TypeScript 支持

项目已完整配置 TypeScript 支持，可以直接使用 `.ts` 和 `.tsx` 文件。

**使用示例：**
```typescript
// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

### Sass/SCSS 支持

项目已配置 Sass/SCSS 支持，可以使用 `.sass` 和 `.scss` 文件。

**使用示例：**
```scss
// src/components/Button.scss
$primary-color: #667eea;

.button {
  background: $primary-color;
  padding: 10px 20px;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
}
```

在组件中导入：
```typescript
import './Button.scss';
```

### Less 支持

项目已配置 Less 支持，可以使用 `.less` 文件。

**使用示例：**
```less
// src/components/Button.less
@primary-color: #667eea;

.button {
  background: @primary-color;
  padding: 10px 20px;
  
  &:hover {
    background: darken(@primary-color, 10%);
  }
}
```

在组件中导入：
```typescript
import './Button.less';
```

### 样式文件选择

你可以根据需要选择使用：
- **CSS** - 标准样式文件
- **Sass/SCSS** - 功能强大的预处理器（变量、嵌套、Mixin 等）
- **Less** - 简洁的预处理器（变量、嵌套、函数等）

在同一个项目中可以混用不同类型的样式文件。

### TypeScript 配置

配置文件：`tsconfig.json`

项目已完整配置 TypeScript 支持，包括：
- 路径别名映射（与 webpack 配置一致）
- 严格类型检查
- JSX 支持
- Source Map 生成

### 路径别名使用示例

```javascript
// 使用路径别名导入
import Component from '@components/Component';
import { helper } from '@utils/helper';
import logo from '@assets/logo.png';
```

## 📚 技术栈

- **Webpack 5** - 模块打包工具
- **React 19** - UI 框架
- **TypeScript** - 类型系统
- **Babel** - JavaScript/TypeScript 编译器
- **Sass** - CSS 预处理器
- **Less** - CSS 预处理器
- **Lodash** - JavaScript 工具库

## 🌐 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 📝 开发规范

### 代码风格

- 使用 ES6+ 语法
- 组件使用函数式组件和 Hooks
- 使用中文注释（关键部分）
- 遵循 React 最佳实践

### 文件命名

- 组件文件：PascalCase（如 `MyComponent.jsx`）
- 工具文件：camelCase（如 `utils.js`）
- 样式文件：kebab-case（如 `my-style.css`）

## 🐛 常见问题

### 端口被占用

如果 8080 端口被占用，可以修改 `webpack.config.js` 中的 `devServer.port` 配置。

### 热更新不工作

确保使用的是 `webpack serve` 命令，而不是 `webpack-dev-server`。

### 构建失败

1. 清除缓存：`npm run clean`
2. 删除 `node_modules` 和 `package-lock.json`
3. 重新安装依赖：`npm install`

## 📄 许可证

ISC

## 👨‍💻 作者

创建者：[您的名字]

## 🔗 相关链接

- [Webpack 官方文档](https://webpack.js.org/)
- [React 官方文档](https://react.dev/)
- [Babel 官方文档](https://babeljs.io/)

