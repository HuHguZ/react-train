const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { getThemeVariables } = require('antd/dist/theme');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: ['@babel/polyfill', './index.tsx'],
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: isProd ? '[hash:base64:5]' : '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /antd.+?\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader', //for css compression
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: getThemeVariables({
                                    dark: true,
                                }),
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.tsx$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        modules: false,
                                        targets: {
                                            browsers: 'last 1 versions, ie 10-11',
                                        },
                                    },
                                ],
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            plugins: ['@babel/plugin-transform-runtime', '@effector/babel-plugin-react'],
                        },
                    },
                ],
            },
        ],
    },
    target: 'electron-renderer',
};
