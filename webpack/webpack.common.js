const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./path.js");

module.exports = {
  entry: [paths.src + "/index.tsx"],

  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    publicPath: "/",
  },

  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: "assets",
          globOptions: {
            ignore: ["*.DS_Store"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),

    // Generates an HTML file from a template
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      // favicon: paths.src + "/images/favicon.png",
      template: paths.src + "/template.html", // template file
      filename: "index.html", // output file
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },

  resolve: {
    modules: [paths.src, "node_modules"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "@": paths.src,
      assets: paths.public,
    },
  },
};
