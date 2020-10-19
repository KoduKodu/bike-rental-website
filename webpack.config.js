const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: join(__dirname, 'src/js', 'index.js'), 
    output: {
        path: join(__dirname, 'dist'), 
        filename: 'app.min.js'
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              "style-loader",
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
            ]
          },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
              test: /\.(jpg|png)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    esModule: false,
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/'
                  }
                }
              ]
            },
            {
                test: /.vue$/, 
                loader: 'vue-loader'
            },
        ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
          filename: "styles.css"
        }),
        new ImageMinimizerPlugin({
          minimizerOptions: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    {
                      removeViewBox: false,
                    },
                  ],
                },
              ],
            ],
          },
        }),
        new CopyPlugin({
          patterns: [
            { from: 'src/_redirects'},
          ],
        }),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: false,
            template: join(__dirname, 'src', 'index.html')
        })
    ]
};