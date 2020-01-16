import path from 'path'
import initConfig from './webpack.base.config.babel'

export default {
  ...initConfig({
    isDebug: true
  }),
  mode: 'development',
  devServer: {
    inline: false,
    contentBase: path.join(__dirname, 'lib'),
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization'
    }
  }
}
