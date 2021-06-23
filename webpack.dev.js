const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    devServer:{
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/public/',
        compress: true
    },
    // output: {
    //     publicPath: 'http://localhost:8080/public/'
    // }
    // devtool: false
})