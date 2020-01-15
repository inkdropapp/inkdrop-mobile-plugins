import { getPackageDependencies } from '../utils/package-dependency'

const plugins = getPackageDependencies().map(pack => {
  return {
    ...pack,
    main: `${pack.name}.js`,
    styleSheets:
      pack.styleSheets && pack.styleSheets.length > 0
        ? [`${pack.name}.css`]
        : [],
    devDependencies: undefined,
    scripts: undefined
  }
})

export default plugins
