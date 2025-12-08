import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * 应用入口文件
 * 负责渲染根组件到 DOM
 */

// 获取根 DOM 元素
const rootElement = document.getElementById('root');

// 检查根元素是否存在
if (!rootElement) {
  throw new Error('找不到 id 为 "root" 的 DOM 元素，请检查 index.html 文件');
}

// 创建 React 根节点
// createRoot API 是 React 18+ 的新特性，替代了之前的 ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

// 渲染应用
// React.StrictMode 是 React 的严格模式，用于：
// 1. 识别不安全的生命周期
// 2. 警告使用过时的 API
// 3. 检测意外的副作用
// 4. 检测过时的 Context API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);