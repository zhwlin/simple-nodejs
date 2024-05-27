const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/a.html',
      filename: 'a.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/b.html',
      filename: 'b.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  mode: 'development',
};
