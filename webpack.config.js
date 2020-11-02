const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './app/src/index.js',
  devtool: "eval-source-map",
  optimization: {
    minimize: true,
    splitChunks: { chunks: "all" },
  },
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|gif|jpg|mp4)$/,
        loader: "file-loader",
        options: {
          limit: 8000,
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader"
        },
      },
      {
        test: /\.(ogv|mp4|m4v|webm)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
              },
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: "./app/index.html" }),
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 5 }],
          [
            'svgo',
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    })
  ]
};