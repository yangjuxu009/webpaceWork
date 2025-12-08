import { uniq } from 'lodash';
import React, { useState, useEffect } from 'react';

/**
 * 应用主组件
 * 演示 React Hooks 和 Lodash 工具库的使用
 */
function App() {
  // 使用 useState Hook 管理组件状态
  const [count, setCount] = useState(0);
  
  // 测试数组，包含重复元素
  const testArray = [1, 2, 2, 3, 3, 4, 5, 5, 6];
  
  // 使用 Lodash 的 uniq 方法去除数组重复元素
  // uniq: 创建一个去重后的数组副本
  const uniqueArray = uniq(testArray);
  
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
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  
  /**
   * 重置计数器
   */
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {/* 主标题 */}
      <h1>Hello, Webpack + React!</h1>
      
      {/* 显示去重后的数组 */}
      <div className="array-display">
        <h2>数组去重演示</h2>
        <p>
          <strong>原始数组:</strong> [{testArray.join(', ')}]
        </p>
        <p>
          <strong>去重后:</strong> [{uniqueArray.join(', ')}]
        </p>
      </div>
      
      {/* 计数器演示 */}
      <div className="counter">
        <h2>计数器演示</h2>
        <p>当前计数: <strong>{count}</strong></p>
        <div className="button-group">
          <button onClick={handleIncrement}>增加</button>
          <button onClick={handleReset}>重置</button>
        </div>
      </div>
    </div>
  );
}

export default App;