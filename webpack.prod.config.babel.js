import initConfig from './webpack.base.config.babel'

export default {
  ...initConfig({
    isDebug: false
  }),
  mode: 'production'
}
