import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export default function initConfig(opts = {}) {
  const { isDebug } = opts

  function enableMiniCssExtractPluginForDebug(loaders) {
    if (isDebug) {
      return ['style-loader', ...loaders]
    } else {
      return [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {}
        },
        ...loaders
      ]
    }
  }

  return {
    context: path.resolve(__dirname, './src'),
    entry: {
      math: [
        'plugin-loader!math',
        'math/styles/markdown-math.less'
      ]
    },
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
            loader: 'babel-loader'
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
    plugins: [
      new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
    externals: {
      react: 'modules.react',
      'prop-types': 'modules["prop-types"]',
      codemirror: 'modules.codemirror',
      inkdrop: 'modules.inkdrop'
    },
    resolveLoader: {
      modules: [
        'node_modules',
        path.resolve(__dirname, 'loaders')
      ]
    }
  }
}
