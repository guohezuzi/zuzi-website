const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: "production",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "public/",
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                oneOf: [
                    // 这里匹配 `<style module>`
                    {
                        resourceQuery: /module/,
                        use: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[local]_[hash:base64:5]'
                                }
                            }
                        ]
                    },
                    // 这里匹配普通的 `<style>` 或 `<style scoped>`
                    {
                        use: [
                            'vue-style-loader',
                            'css-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    "plugins":[
                        "syntax-dynamic-import",
                    ]
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[path][hash].[ext]'
                }
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new BundleAnalyzerPlugin()
    ],

    resolve: {
        extensions: ['.js', '.vue']
    }
};