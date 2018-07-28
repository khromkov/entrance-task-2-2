const path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js',
  },
  resolve: {
    enforceExtension: false,
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000,
  },
};
