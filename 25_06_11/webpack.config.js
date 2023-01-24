const DEV = "development";
const PROD = "production";

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssPlugin = require("mini-css-extract-plugin");

let mode = DEV;

console.log("ENV:", mode);

if (process.env.NODE_ENV === PROD) {
  mode = PROD;
}

module.exports = {
  mode: mode,
  output: {
    clean: true,
    assetModuleFilename: "asset/[hash][ext][query]",
  },
  plugins: [
    new MiniCssPlugin({ filename: "[name].[contenthash].css" }),
    new HTMLWebpackPlugin({
      teamplate: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === DEV ? "style-loader" : MiniCssPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", 
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ],
  },
};
