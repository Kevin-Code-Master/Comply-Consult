const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const historyApiFallback = require("connect-history-api-fallback");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        service: './src/js/service.js',
        team: './src/js/team.js',
        audit: './src/js/compliance_audit.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
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
            title: "Comply Consult - Home",
            filename: 'index.html',
            template: './src/pages/template.html',
            chunks: ['index'],
            favicon: './src/Assets/images/favicons/favicon.png',
        }),
        new HtmlWebpackPlugin({
            title: 'Comply Consult - Services',
            filename: 'services.html',
            template: './src/pages/service_template.html',
            chunks: ['service'],
            favicon: './src/Assets/images/favicons/favicon.png',
        }),
        new HtmlWebpackPlugin({
            title: 'Comply Consult - Our Team',
            filename: 'team.html',
            template: './src/pages/team_template.html',
            chunks: ['team'],
            favicon: './src/Assets/images/favicons/favicon.png',
        }),
        new HtmlWebpackPlugin({
            title: 'Compliance Audits',
            filename: 'compliance_audit.html',
            template: './src/pages/compliance_audit_template.html',
            chunks: ['audit'],
            favicon: './src/Assets/images/favicons/favicon.png',
        }),
        new HtmlWebpackPlugin({
            title: 'Payment Successful',
            filename: 'payment_successful.html',
            template: './src/pages/success_template.html',
            chunks: ['success'],
            favicon: './src/Assets/images/favicons/favicon.png',
        }),
        new HtmlWebpackPlugin({
            title: 'Payment Cancelled',
            filename: 'cancel_payment.html',
            template: './src/pages/cancel_template.html',
            chunks: ['cancel'],
            favicon: './src/Assets/images/favicons/favicon.png',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "assets" }
            ]
        })
    ],
};
