const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUBLIC_PATH = path.join(__dirname, 'public');

const mode = process.env.NODE_ENV || 'development';
const isDevMode = mode === 'development';

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: isDevMode ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: isDevMode ? '[id].js' : '[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    enforceExtension: false,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isDevMode ? '[name].css' : '[name].[chunkhash].css',
      chunkFilename: isDevMode ? '[id].css' : '[id].[chunkhash].css',
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    host: '0.0.0.0',
  },
};
