const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const historyApiFallback = require("connect-history-api-fallback");


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test:/\.jsx$|js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
               test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
               type: 'asset/resource', // Handles font files 
            },
            {
                test: /\.(ico|png|jpg|jpeg|webp|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: "Comply Consult",
            filename: 'index.html',
            template: './src/template.html',
            favicon: './src/Assets/favicons/favicon.png',
        }),
    ],
}