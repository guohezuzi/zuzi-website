const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",
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
        include: [
          path.resolve(__dirname,'src'),
          path.resolve(__dirname,'node_modules/vue-awesome')
        ],
        options: {
          "plugins": [
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
  ],

  resolve: {
    extensions: ['.js', '.vue']
  },

  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 9000,
    host:'0.0.0.0'
  }
};