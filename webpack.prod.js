const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
    module: {
        rules: [
                {
            test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
})