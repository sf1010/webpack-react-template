const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');// 定义html模板插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 拆分合并css插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 清理目录插件

const config = {
  entry: {
    app: './src/framework/index.js', // 入口1
  },
  output: {
    path: path.resolve(__dirname, '../dist'), // 出口目录
    filename: 'js/[name].[chunkhash:7].js', // 出口文件名，[name]表示通入口文件名
    chunkFilename: 'js/[name].[chunkhash:7].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules|antd\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        include: /node_modules|antd\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: {
                'primary-color': '#ff8000',
                'link-color': '#ff8000',
                'border-radius-base': '2px',
                'font-size-base': '12px',
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][local]-[hash:base64:5]',
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'iconfont/[name].[hash:7].[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: '/',
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)/, //是匹配图片文件后缀名称
        use: [
          {
            loader: 'url-loader', //是指定使用的loader和loader的配置参数
            options: {
              limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
              name: 'img/[name].[hash:7].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.(htm|html)$/i,
        use: [
          'html-withimg-loader',
        ],
      },
      {
        test: /\.(jsx|js)$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // html模板打包
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true,
      },
      filename: '../dist/index.html',
      template: './src/view/index.html',
      hash: true,
      // favicon: './src/asset/img/favicon.ico',
    }),
    // css整合拆分
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:7].css',
      chunkFilename: 'css/[name].[contenthash:7].chunk.css'
    }),
    // 每次编译清理目录
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
};

module.exports = config;
