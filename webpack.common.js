const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules:[
            {
            test: /\.html$/,
            use: ['html-loader']
            },
            {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource'
            },
            {
            test: /\.(svg|png|jpg|gif|jpeg)$/i,
            type: 'asset/resource'
            }
        ]
    }
}
