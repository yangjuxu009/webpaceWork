# 代码格式化配置指南

本项目已配置完整的代码格式化工具，包括 Prettier、ESLint 和 EditorConfig。

## 📋 已安装的工具

### 1. Prettier - 代码格式化工具
- **版本**: 3.7.4
- **配置文件**: `.prettierrc.js`
- **忽略文件**: `.prettierignore`
- **作用**: 统一代码格式，自动格式化代码

### 2. ESLint - 代码检查工具
- **版本**: 9.39.1
- **配置文件**: `eslint.config.mjs` (Flat Config 格式)
- **忽略文件**: `.eslintignore`
- **作用**: 检查代码质量问题，提供最佳实践建议

### 3. EditorConfig - 编辑器配置
- **配置文件**: `.editorconfig`
- **作用**: 统一不同编辑器的代码风格设置

## 🚀 使用方法

### 格式化代码

```bash
# 格式化 src 目录下的所有文件
pnpm run format

# 检查代码格式（不修改文件）
pnpm run format:check

# 格式化整个项目（包括配置文件）
pnpm run format:all
```

### 代码检查

```bash
# 检查代码质量问题
pnpm run lint

# 检查并自动修复问题
pnpm run lint:fix
```

## ⚙️ 配置文件说明

### Prettier 配置 (.prettierrc.js)

主要配置项：
- **printWidth**: 100 - 每行最大 100 个字符
- **tabWidth**: 2 - 使用 2 个空格缩进
- **semi**: true - 使用分号
- **singleQuote**: true - 使用单引号
- **trailingComma**: "es5" - 在 ES5 有效的地方使用尾随逗号
- **endOfLine**: "lf" - 使用 LF 换行符

### ESLint 配置 (eslint.config.mjs)

已配置的规则：
- ✅ React Hooks 规则检查
- ✅ TypeScript 类型检查
- ✅ 未使用变量检查
- ✅ 代码风格统一
- ✅ 与 Prettier 集成，避免冲突

### EditorConfig 配置 (.editorconfig)

统一编辑器设置：
- UTF-8 编码
- 2 空格缩进
- LF 换行符
- 去除行尾空格
- 文件末尾插入空行

## 🔧 VS Code 集成

项目已配置 `.vscode/settings.json`，VS Code 会自动：

1. **保存时自动格式化** - 使用 Prettier
2. **保存时自动修复** - 使用 ESLint
3. **使用项目配置** - 自动识别项目配置文件

### 需要安装的 VS Code 扩展

建议安装以下扩展（可选，但推荐）：

```bash
# Prettier 扩展
code --install-extension esbenp.prettier-vscode

# ESLint 扩展
code --install-extension dbaeumer.vscode-eslint

# EditorConfig 扩展
code --install-extension EditorConfig.EditorConfig
```

或者在 VS Code 扩展市场搜索：
- **Prettier - Code formatter**
- **ESLint**
- **EditorConfig for VS Code**

## 📝 格式化示例

### 格式化前

```javascript
const   name="张三"
const age=20
function   greet(  ){return `你好，我是${name}，今年${age}岁`}
```

### 格式化后

```javascript
const name = '张三';
const age = 20;

function greet() {
  return `你好，我是${name}，今年${age}岁`;
}
```

## 🎯 最佳实践

1. **提交前格式化**: 提交代码前运行 `pnpm run format`
2. **保存时格式化**: 在 VS Code 中启用保存时自动格式化
3. **CI/CD 集成**: 在 CI 流程中添加 `format:check` 和 `lint` 检查
4. **团队协作**: 所有团队成员使用相同的格式化配置

## 🔍 常见问题

### Prettier 和 ESLint 冲突？

✅ 已解决！项目使用 `eslint-config-prettier` 来禁用 ESLint 中与 Prettier 冲突的格式规则。

### 不想格式化某些文件？

在 `.prettierignore` 文件中添加要忽略的文件或目录。

### 如何自定义格式化规则？

修改 `.prettierrc.js` 文件中的配置项，参考 [Prettier 官方文档](https://prettier.io/docs/en/options.html)。

## 📚 相关文档

- [Prettier 官方文档](https://prettier.io/)
- [ESLint 官方文档](https://eslint.org/)
- [EditorConfig 官方文档](https://editorconfig.org/)





