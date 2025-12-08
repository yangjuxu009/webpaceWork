const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * Webpack 配置文件
 * 用于打包 React 应用，支持开发和生产环境
 */
module.exports = (env, argv) => {
  // 判断是否为生产环境
  const isProduction = argv.mode === 'production';

  return {
    // ==================== 入口配置 ====================
    // 指定应用的入口文件
    entry: './src/index.jsx',
    
    // ==================== 输出配置 ====================
    output: {
      // 输出目录的绝对路径
      path: path.resolve(__dirname, 'dist'),
      // 输出文件名规则
      // [name]: 入口文件名
      // [contenthash]: 文件内容哈希值，用于缓存优化
      // [id]: chunk id
      filename: isProduction 
        ? 'js/[name].[contenthash:8].js' 
        : 'js/[name].js',
      // chunk 文件名（代码分割后的文件）
      chunkFilename: isProduction
        ? 'js/[name].[contenthash:8].chunk.js'
        : 'js/[name].chunk.js',
      // 自动清理输出目录（替代 CleanWebpackPlugin）
      clean: true,
      // 公共资源路径
      publicPath: '/',
    },
    
    // ==================== 模块解析配置 ====================
    resolve: {
      // 文件扩展名解析顺序（导入时可省略扩展名）
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      // 路径别名配置（简化导入路径）
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'src/assets'),
      },
      // 解析模块时查找的目录
      modules: ['node_modules', path.resolve(__dirname, 'src')],
    },
    
    // ==================== 模块处理规则 ====================
    module: {
      rules: [
        // 处理 JavaScript/JSX 文件（使用 Babel 转译）
        {
          test: /\.(js|jsx)$/,
          // 排除 node_modules 目录，不处理第三方库
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // Babel 预设配置
              presets: [
                // ES6+ 语法转换为 ES5
                ['@babel/preset-env', {
                  // 按需加载 polyfill
                  useBuiltIns: 'usage',
                  // 使用 core-js 3
                  corejs: 3,
                }],
                // React JSX 语法转换
                ['@babel/preset-react', {
                  // 使用新的 JSX 转换（React 17+，无需导入 React）
                  runtime: 'automatic',
                }],
              ],
              // 启用 Babel 缓存，提升构建速度
              cacheDirectory: true,
            },
          },
        },
        // 处理 TypeScript 文件（如果使用 TS）
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                // 启用 TypeScript 的类型检查
                transpileOnly: false,
              },
            },
          ],
        },
        // 处理 CSS 文件
        {
          test: /\.css$/,
          // 处理顺序：从右到左执行
          // css-loader: 解析 CSS 中的 @import 和 url()
          // style-loader: 将 CSS 注入到 DOM 中
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                // 启用 CSS Modules（可选）
                modules: false,
                // 在源文件中定位错误
                sourceMap: !isProduction,
              },
            },
          ],
        },
        // 处理图片文件
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          type: 'asset',
          parser: {
            // 小于 8KB 的图片转为 base64，大于 8KB 的文件单独输出
            dataUrlCondition: {
              maxSize: 8 * 1024, // 8KB
            },
          },
          generator: {
            // 图片输出路径和文件名
            filename: 'images/[name].[hash:8][ext]',
          },
        },
        // 处理字体文件
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            // 字体输出路径和文件名
            filename: 'fonts/[name].[hash:8][ext]',
          },
        },
      ],
    },
    
    // ==================== 插件配置 ====================
    plugins: [
      // HTML 模板插件 - 自动生成 HTML 文件并注入打包后的资源
      new HtmlWebpackPlugin({
        // HTML 模板文件路径
        template: './public/index.html',
        // 输出 HTML 文件名
        filename: 'index.html',
        // 是否压缩 HTML（生产环境）
        minify: isProduction ? {
          removeComments: true,        // 移除注释
          collapseWhitespace: true,    // 折叠空白
          removeRedundantAttributes: true, // 移除冗余属性
          removeScriptTypeAttributes: true, // 移除 script type
          removeStyleLinkTypeAttributes: true, // 移除 style/link type
          useShortDoctype: true,       // 使用短文档类型
        } : false,
        // 注入资源到 HTML
        inject: true,
        // 页面标题（可在模板中使用 <%= htmlWebpackPlugin.options.title %>）
        title: 'Webpack + React 应用',
      }),
    ],
    
    // ==================== 开发服务器配置 ====================
    devServer: {
      // 静态文件目录
      static: {
        directory: path.join(__dirname, 'public'),
        // 静态文件服务的公共路径
        publicPath: '/',
      },
      // 启用 gzip 压缩
      compress: true,
      // 服务器端口
      port: 8080,
      // 自动打开浏览器
      open: true,
      // 启用热模块替换（HMR）
      hot: true,
      // 历史 API 回退（支持 React Router）
      historyApiFallback: {
        index: '/index.html',
      },
      // 代理配置（解决跨域问题）
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
      // 显示编译错误和警告
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    },
    
    // ==================== 开发工具配置 ====================
    // 生成 source map，便于调试
    // 'eval-source-map': 开发环境推荐，构建速度快，支持原始源码
    // 'source-map': 生产环境推荐，生成独立的 source map 文件
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    
    // ==================== 优化配置 ====================
    optimization: {
      // 启用代码分割
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // 提取第三方库（node_modules）
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          // 提取公共代码
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
      // 生产环境优化
      ...(isProduction && {
        // 启用最小化
        minimize: true,
        // 模块标识符（用于缓存优化）
        moduleIds: 'deterministic',
        // chunk 标识符（用于缓存优化）
        chunkIds: 'deterministic',
      }),
    },
    
    // ==================== 性能提示 ====================
    performance: {
      // 关闭性能提示（可根据需要调整）
      hints: false,
      // 最大入口文件大小
      maxEntrypointSize: 512000,
      // 最大资源文件大小
      maxAssetSize: 512000,
    },
    
    // ==================== 模式配置 ====================
    // 可通过命令行参数覆盖：--mode development 或 --mode production
    mode: isProduction ? 'production' : 'development',
  };
};