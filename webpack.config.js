const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.vue', '.js']
  },
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/i, use: ['vue-loader']
      },
      {
        test: /\.js$/i, exclude: /node_modules/, use: ['babel-loader']
      },
      {
        test: /\.(c|sc|sa)ss$/i, use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/i, use: ['html-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
}