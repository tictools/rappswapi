const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RAPPSWAPI',
      template: './src/index.html',
      hash: true
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  }
}
