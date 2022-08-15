const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const PugPlugin = require('pug-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.pug',
        card: './pages/card.pug',
        color: './pages/color.pug'

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource'
            },

            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader",
                ],
            },
            {
                test: /.pug$/,
                loader: PugPlugin.loader,
                options: {
                    pretty: 'true',
                }// Pug loader
            },
        ] ///Установил css и scss закончил на установке pug-plagin


    },
    plugins: [
        new CleanWebpackPlugin(),
        new PugPlugin(),

    ]
};
