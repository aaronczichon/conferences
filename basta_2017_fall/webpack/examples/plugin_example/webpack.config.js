const path = require("path");
const MyPlugin = require("./my-plugin.js");
const webpack = require('webpack');

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new MyPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
