
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const OUTPUT = path.join(__dirname, 'dist');

module.exports = {

    entry: {
        main: './src/index.js',
    },

    output: {
        path: OUTPUT,
        filename: '[name].js'
    },

    devtool: 'source-map',

    devServer: {
        contentBase: OUTPUT,
        compress: true,
        port: 9000
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            actions: path.join(__dirname, 'src/actions'),
            reducers: path.join(__dirname, 'src/reducers'),
            components: path.join(__dirname, 'src/components')
        }
    },

    module: {
        rules: [
            // javascript
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './sample-template.ejs',
            inject: 'body',
        })
    ]

};
