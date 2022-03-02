const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map", //CRA recommends for dev env

  //devServer
  devServer: {
    hot: true,
    open: true,
    port: 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.BASE_API": JSON.stringify("https://api.dev.com/"),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
};
