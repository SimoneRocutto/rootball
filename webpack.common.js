const path = require('path');

module.exports = {
    entry: './resources/assets/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/assets')
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}