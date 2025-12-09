# VS Code 扩展安装指南

## 🎯 组件路径补全和自动导入必备扩展

### 核心扩展（强烈推荐）

#### 1. **Auto Import - ES6, TS, JSX, TSX**
- **扩展 ID**: `steoates.autoimport`
- **功能**：自动导入模块，支持路径别名
- **安装命令**：
  ```bash
  code --install-extension steoates.autoimport
  ```
- **或**：在 VS Code 扩展市场搜索 "Auto Import"

#### 2. **Path Intellisense**
- **扩展 ID**: `christian-kohler.path-intellisense`
- **功能**：文件路径自动补全
- **安装命令**：
  ```bash
  code --install-extension christian-kohler.path-intellisense
  ```
- **配置**：会自动读取 `tsconfig.json` 中的路径别名

#### 3. **TypeScript and JavaScript Language Features** (通常已内置)
- **扩展 ID**: `vscode.typescript-language-features`
- **功能**：TypeScript/JavaScript 语言支持，包括自动导入
- **状态**：VS Code 内置扩展，通常已自动安装

---

### 推荐扩展（可选但有用）

#### 4. **ES7+ React/Redux/React-Native snippets**
- **扩展 ID**: `dsznajder.es7-react-js-snippets`
- **功能**：React 代码片段，快速生成组件代码
- **安装命令**：
  ```bash
  code --install-extension dsznajder.es7-react-js-snippets
  ```
- **使用示例**：
  - 输入 `rafce` → 生成函数组件
  - 输入 `rafc` → 生成带 export 的函数组件

#### 5. **Auto Rename Tag**
- **扩展 ID**: `formulahendry.auto-rename-tag`
- **功能**：自动重命名配对的 HTML/JSX 标签
- **安装命令**：
  ```bash
  code --install-extension formulahendry.auto-rename-tag
  ```

#### 6. **Prettier - Code formatter**
- **扩展 ID**: `esbenp.prettier-vscode`
- **功能**：代码格式化
- **安装命令**：
  ```bash
  code --install-extension esbenp.prettier-vscode
  ```

#### 7. **ESLint**
- **扩展 ID**: `dbaeumer.vscode-eslint`
- **功能**：代码检查和自动修复
- **安装命令**：
  ```bash
  code --install-extension dbaeumer.vscode-eslint
  ```

---

## 📦 批量安装扩展

### 方法一：使用 VS Code 命令行

```bash
# 安装所有推荐的扩展
code --install-extension steoates.autoimport
code --install-extension christian-kohler.path-intellisense
code --install-extension dsznajder.es7-react-js-snippets
code --install-extension formulahendry.auto-rename-tag
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension EditorConfig.EditorConfig
```

### 方法二：使用 VS Code UI

1. 打开 VS Code
2. 点击左侧扩展图标（或按 `Cmd+Shift+X` / `Ctrl+Shift+X`）
3. 搜索扩展名称并安装

### 方法三：使用扩展推荐

VS Code 会检测到项目根目录的 `.vscode/extensions.json` 文件，并在右下角提示安装推荐的扩展。

---

## ⚙️ Path Intellisense 配置

创建或更新 `.vscode/settings.json` 以配置路径补全：

```json
{
  // Path Intellisense 配置
  "path-intellisense.mappings": {
    "@": "${workspaceFolder}/src",
    "@components": "${workspaceFolder}/src/components",
    "@utils": "${workspaceFolder}/src/utils",
    "@assets": "${workspaceFolder}/src/assets",
    "@styles": "${workspaceFolder}/src/styles"
  },

  // 排除的文件和目录
  "path-intellisense.excludedSubdirectories": [
    "node_modules",
    "dist",
    "build",
    ".git"
  ]
}
```

---

## 🚀 使用示例

### 自动导入组件

1. **输入组件名称**：
   ```tsx
   <TestComponent />
   ```

2. **触发自动导入**：
   - 方法一：将光标放在 `TestComponent` 上，按 `Cmd+.` (Mac) 或 `Ctrl+.` (Windows)
   - 方法二：保存文件时自动添加
   - 方法三：输入时自动提示（需要 Auto Import 扩展）

3. **自动添加导入**：
   ```tsx
   import { TestComponent } from './TestComponent';
   // 或
   import { TestComponent } from '@/TestComponent';
   ```

### 路径补全

输入 `import ... from '@/` 时，Path Intellisense 会自动提示可用的路径：
- `@/TestComponent`
- `@/App`
- `@components/...`
- 等等

---

## ✅ 验证安装

安装扩展后：

1. **重启 VS Code**
2. **测试自动导入**：
   - 输入 `<TestComponent />`
   - 查看是否提示自动导入
3. **测试路径补全**：
   - 输入 `import ... from '@/`
   - 查看是否显示路径提示

---

## 🔧 故障排除

### 自动导入不工作？

1. **检查扩展是否安装**：
   - 打开扩展面板（`Cmd+Shift+X`）
   - 搜索 "Auto Import" 确认已安装

2. **检查 TypeScript 服务**：
   - 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows)
   - 输入 "TypeScript: Restart TS Server"
   - 选择并执行

3. **检查配置文件**：
   - 确保 `tsconfig.json` 配置正确
   - 确保 `.vscode/settings.json` 配置正确

4. **重新加载窗口**：
   - 按 `Cmd+Shift+P` 或 `Ctrl+Shift+P`
   - 输入 "Developer: Reload Window"

---

## 📚 相关文档

- [VS Code 扩展市场](https://marketplace.visualstudio.com/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Path Intellisense GitHub](https://github.com/ChristianKohler/PathIntellisense)
- [Auto Import GitHub](https://github.com/soates/Auto-Import)



