const path = require("path");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const pkg = path.resolve(__dirname, "pkg");

module.exports = {
  devServer: {
    contentBase: pkg,
    mimeTypes: { wasm: ["application/wasm"] },
  },
  devtool: "inline-source-map",
  entry: {
    index: "./pkg/index.js",
  },
  experiments: {
    asyncWebAssembly: true,
    layers: true,
    lazyCompilation: true,
    outputModule: true,
    syncWebAssembly: true,
    topLevelAwait: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.{t,j}s$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                targets: {
                  esmodules: true,
                },
              },
            ],
          ],
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: pkg,
  },
  plugins: [
    new CopyPlugin([path.resolve(__dirname, "static")]),
    // new HtmlWebpackPlugin({
    //   scriptLoading: "blocking",
    //   template: "static/index.html",
    // }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, "."),
    }), // Have this example work in Edge which doesn't ship `TextEncoder` or
    // `TextDecoder` at this time.
    // new webpack.ProvidePlugin({
    //   TextDecoder: ["text-encoding", "TextDecoder"],
    //   TextEncoder: ["text-encoding", "TextEncoder"],
    // }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"],
  },
};
