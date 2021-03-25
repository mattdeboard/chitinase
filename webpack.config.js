const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const pkg = path.resolve(__dirname, "pkg");

module.exports = {
  mode: "production",
  entry: {
    index: "./js/index.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "pkg"),
  },
  devServer: {
    contentBase: pkg,
  },
  plugins: [
    new CopyPlugin([path.resolve(__dirname, "static")]),

    new WasmPackPlugin({
      crateDirectory: __dirname,
    }),
  ],
};
