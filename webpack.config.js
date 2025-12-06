const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口文件
  entry: './src/index.jsx',
  
  // 输出配置
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js', // 带哈希值的文件名（缓存优化）
    clean: true, // 自动清理旧产物（替代 CleanWebpackPlugin）
  },
  
  // 模块解析规则
  module: {
    rules: [
      // 处理 JS/JSX 文件（使用 Babel 转译）
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // 处理 CSS 文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 顺序：从右到左执行
      },
    ],
  },
  
  // 插件配置
  plugins: [
    // 生成 HTML 文件并注入打包后的 JS
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // 清理 dist 目录（Webpack 5 可直接用 output.clean，此处可选）
    // new CleanWebpackPlugin(),
  ],
  
  // 开发服务器配置
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
    hot: true, // 热模块替换（HMR）
    open: true, // 自动打开浏览器
  },
  
  // 模式配置（可通过命令行 --mode 覆盖）
  mode: 'development',
  
  // 解析文件扩展名（无需写后缀）
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};