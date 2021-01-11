const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 8001,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, "src", "index.html")
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ]
}