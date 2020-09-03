const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common ,{    
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './static/dist/dev/JS/')
    },
    watch: true,
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
          filename: '../../dev/CSS/[name].min.css',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: '../../dev/FONTS'
                }
              }
            ]
          }
        ],
    },
}); 