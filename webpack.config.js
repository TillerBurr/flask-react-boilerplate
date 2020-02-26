const webpack = require("webpack");
const resolve = require("path").resolve;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = {
  devtool: "source-map",
  entry: __dirname + "/src/index.js",
  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: true })],
  output: {
    path: resolve("./public/js"),
    filename: "[name].[contenthash].js",
    publicPath: resolve("./public/js")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
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
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  }
};
module.exports = config;
