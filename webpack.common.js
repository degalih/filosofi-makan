const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
            },
          ],
        },
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/kontak.html",
            filename: "kontak.html"
        }),
        new HtmlWebpackPlugin({
          template: "./src/tentang.html",
          filename: "tentang.html"
      })
    ],
};