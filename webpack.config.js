const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js", "./src/styles/main.scss"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },

  devServer: {
    port: 3030,
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pages/home.pug",
      filename: "home.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/pokedex.pug",
      filename: "pokedex.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/legendaries.pug",
      filename: "legendaries.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
    ],
  },
};
