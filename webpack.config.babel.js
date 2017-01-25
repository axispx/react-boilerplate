import path from 'path';
import os from 'os';

import colors from 'colors';

import {HotModuleReplacementPlugin} from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import DashboardPlugin from 'webpack-dashboard/plugin';

const defaultEnv = {
  dev: true,
  production: false
}

export default (env = defaultEnv) => {

  if(env.dev) {
    require('dns').lookup(require('os').hostname(), function (err, add, fam) {
      console.log("Project is running remotely at " + `http://${add}:3000\n`.blue.bold);
    })
  }

  return {
    entry: [
      ...env.dev ? [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
      ] : [],
      path.join(__dirname, 'src/index.js'),
    ],
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/'
    },
    plugins: [
      ...env.dev ? [
        new HotModuleReplacementPlugin(),
        new DashboardPlugin(),
      ] : [
        new ExtractTextPlugin('css/main.css'),
      ],
      new HTMLWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        filename: 'index.html',
        cache: false,
        minify: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        }
      })
    ],
    module: {
      rules: [

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
          use: [{
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', {modules: false}],
                'stage-0',
                'react'
              ],
              plugins: ['react-hot-loader/babel'],
            }
          }]
        },

        {
          test: /\.(css|scss|sass)$/,
          loader: env.dev ? 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]!sass-loader!postcss-loader' : ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]___[local]___[hash:base64:5]!sass-loader!postcss-loader'
          })
        },

        {
          test: /\.(png|jpeg|jpg|svg)$/,
          use:[
            {
              loader: 'file-loader?name=media/[name].[ext]',
            },
            {
              loader: 'image-webpack-loader',
              options: {
                progressive: true,
                optimizationLevel: 7,
                interlaced: false,
                pngquant: {
                  quality: '65-90',
                  speed: 4
                }
              }
            }
          ]
        },

        {
          test: /\.(woff|woff2|ttf|eot)$/,
          loader: 'file-loader?name=media/[name].[ext]'
        },

      ]
    },

    resolve: {
      extensions: [".js", ".jsx", ".json", ".css", ".scss", ".sass"]
    },

    devServer: {
      contentBase: env.dev ? './src' : './build',
      hot: env.dev,
      port: 3000,
      historyApiFallback: true,
      host: '0.0.0.0'
    },
    devtool: env.dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map'
  }
};
