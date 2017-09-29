const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
          test: /\.jpe?g$/,
          use: "file-loader"
      }
    ]
  }
};
