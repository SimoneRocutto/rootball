const path = require('path');

module.exports = {
    mode: 'development',
        entry: './src/typescript/main.ts',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    }
}