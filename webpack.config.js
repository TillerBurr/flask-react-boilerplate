const webpack = require("webpack");
const resolve = require("path").resolve;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = {
  devtool: "eval-source-map",
  entry: __dirname + "/src/index.js",
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: resolve("./public/js"),
    filename: "[name].[contenthash].js",
    publicPath: resolve("./public/js")
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
module.exports = config;
