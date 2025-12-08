import { uniq } from 'lodash';
import React, { useState, useEffect } from 'react';

// 导入样式文件（可以根据需要选择 Sass 或 Less）
import './App.scss'; // 使用 Sass/SCSS
// import './App.less';  // 使用 Less
// import './App.css';   // 使用 CSS

/**
 * 应用主组件（TypeScript 版本）
 * 演示 React Hooks、TypeScript 类型和 Lodash 工具库的使用
 */

// 定义接口类型（TypeScript 特性）
interface ArrayDisplayProps {
  originalArray: number[];
  uniqueArray: number[];
}

// 使用 TypeScript 接口定义组件 Props
const ArrayDisplay: React.FC<ArrayDisplayProps> = ({ originalArray, uniqueArray }) => {
  return (
    <div className="array-display">
      <h2>数组去重演示</h2>
      <p>
        <strong>原始数组:</strong> [{originalArray.join(', ')}]
      </p>
      <p>
        <strong>去重后:</strong> [{uniqueArray.join(', ')}]
      </p>
    </div>
  );
};

// 主组件（使用 TypeScript）
const App: React.FC = () => {
  // 使用 useState Hook 管理组件状态（带类型注解）
  const [count, setCount] = useState<number>(0);

  // 测试数组，包含重复元素
  const testArray: number[] = [1, 2, 2, 3, 3, 4, 5, 5, 6];

  // 使用 Lodash 的 uniq 方法去除数组重复元素
  const uniqueArray: number[] = uniq(testArray);

  // 使用 useEffect Hook 处理副作用
  useEffect(() => {
    // 组件挂载或更新时执行
    console.log('去重后的数组:', uniqueArray);
    console.log('原始数组:', testArray);
  }, []); // 空依赖数组表示仅在组件挂载时执行一次

  /**
   * 处理按钮点击事件
   * 更新计数器的值
   */
  const handleIncrement = (): void => {
    setCount((prevCount: number) => prevCount + 1);
  };

  /**
   * 重置计数器
   */
  const handleReset = (): void => {
    setCount(0);
  };
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div className="App">
      {/* 主标题 */}
      <h1>Hello, Webpack + React + TypeScript!</h1>

      {/* 显示去重后的数组 */}
      <ArrayDisplay originalArray={testArray} uniqueArray={uniqueArray} />

      {/* 计数器演示 */}
      <div className="counter">
        <h2>计数器演示</h2>
        <p>
          当前计数: <strong>{count}</strong>
        </p>
        <div className="button-group">
          <button onClick={handleIncrement}>增加</button>
          <button onClick={handleReset}>重置</button>
        </div>
      </div>
    </div>
  );
};

export default App;
