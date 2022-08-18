const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const PugPlugin = require('pug-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.pug',


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
                test: /\.(png|jpg|svg|gif|jfif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
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
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]


    },
    plugins: [
        new CleanWebpackPlugin(),
        new PugPlugin(),

        ]
};
