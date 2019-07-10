const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: {
      index: "index.html"
    }
  }
});
