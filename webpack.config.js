const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackTemplate = require("html-webpack-template");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Recipes App",
      meta: { viewport: "width=device-width, initial-scale=1.0" },
      inject: true,
      template: htmlWebpackTemplate,
      links: [
        "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap",
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
