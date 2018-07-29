const path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
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
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
    host: '0.0.0.0',
  },
};
