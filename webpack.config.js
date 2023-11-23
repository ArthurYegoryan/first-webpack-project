const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "production",  // "production", "development", "none"
    entry: {
        main: path.resolve(__dirname, "src/index.js")
    },
    output: {
        filename: "[hash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[hash].css"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                // use: ["style-loader", "css-loader"],
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                // test: /\.(png|jpe?g|gif)$/i,
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};