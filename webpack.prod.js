const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = merge(common,{
    mode: 'production',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                  removeAttributeQuotes: true,
                  collapseWhitespace: true,
                  removeComments: true
                },
                favicon: './src/assets/images/favicon.png'
            })
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].[contentHash].css'}),
    ],
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
})