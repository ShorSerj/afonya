const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let mode = 'development';
let target = 'web';

const isDev = process.env.NODE_ENV === 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new CopyPlugin ({
    patterns: [{
    from: path.resolve(__dirname, 'src/assets/images'),
    to: path.resolve(__dirname, 'dist/img')
    }]
  }),
];

module.exports = {
  mode,
  target,
  plugins,
  entry: './src/index.js',
  devServer: {
    static: './dist',
    hot: true,
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(?:|gif|png|jpe?g|svg|webp|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: () => {
            return isDev ? 'img/[name][ext]' : 'img/[name][ext]';
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
};
