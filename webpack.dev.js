const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/public/',
        compress: true
    },
    module: {
        rules: [
                {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
    // output: {
    //     publicPath: 'http://localhost:8080/public/'
    // }
    // devtool: false
})