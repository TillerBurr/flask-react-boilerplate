const webpack = require("webpack");
const resolve = require("path").resolve;
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const config = {
  devtool: "inline-source-map",
  entry: __dirname + "/src/index.tsx",
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!keep-alive.js"],
      verbose: true,
    }),
  ],
  output: {
    path: resolve("./public/js"),
    filename: "[name].[contenthash].js",
    publicPath: resolve("./public/js"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css"],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
      { test: /\.m?js/, resolve: { fullySpecified: false } },
    ],
  },
};
module.exports = config;
