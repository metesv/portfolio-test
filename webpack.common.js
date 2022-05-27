const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    login: "./src/js/auth/login.js",
    register: "./src/js/auth/register.js",
    vendor: "./src/vendor.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      chunks: ["main", "vendor"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/login.html",
      filename: "login.html",
      chunks: ["login", "vendor"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/register.html",
      filename: "register.html",
      chunks: ["register", "vendor"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
};
