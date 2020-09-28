const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common ,{    
    mode: "production",
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, './static/dist/JS/')
    },
    optimization:{
        minimizer: [
            new TerserJSPlugin({

            }),
            new OptimizeCSSAssetsPlugin({

            })
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '../../dist/CSS/[name].min.css',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
        ],
    },
});