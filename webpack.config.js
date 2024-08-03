const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { optimize } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|svg|jpe?g)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/icons",
              publicPath: "assets/icons",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    watchFiles: ["src/**/*"], 
    open: true,
  },

};
