const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/src/index.js',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    filename: 'bundle.[fullhash].js',
    clean: true
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8000,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              //localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(txt|csv)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'csv_files/[name].[ext]',
              emitFile: true,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Climate Change Impact on Food Production',
      header: 'Climate Change Effects On Food Supply',
      favicon: 'public/images/favicon.ico',
      template: 'public/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
};