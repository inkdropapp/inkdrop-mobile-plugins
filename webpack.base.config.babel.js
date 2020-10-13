import path from 'path'
import fs from 'fs'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { getPackageEntryPoints } from './utils/package-dependency'

export default function initConfig(opts = {}) {
  const { isDebug } = opts

  return {
    context: path.resolve(__dirname, './src'),
    entry: getPackageEntryPoints(),
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDebug
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDebug
              }
            },
            {
              loader: 'string-replace-loader',
              options: {
                search: 'inkdrop://math/node_modules/',
                replace: '~',
                flags: 'g'
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: isDebug
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=[name].[hash].[ext]'
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
    externals: {
      react: 'modules.react',
      'prop-types': 'modules["prop-types"]',
      codemirror: 'modules.codemirror',
      inkdrop: 'modules.inkdrop',
      electron: JSON.stringify(false)
    },
    resolveLoader: {
      modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    }
  }
}
