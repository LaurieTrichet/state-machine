const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: './src/main.ts',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ // compile ts files to js that run on the browser
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: '[folder][name].[ext]'
                        },
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets',
                            name: '[folder][name].[ext]'
                        },
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    plugins: [
        new CopyPlugin([ // copy the html file over to the dist folder
            { from: 'index.html', to: path.resolve(__dirname, 'dist') },
        ]),
    ],
};