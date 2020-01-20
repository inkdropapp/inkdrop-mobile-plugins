import path from 'path'
import fs from 'fs'
import packageJson from '../package.json'

export function getPackageDependencies() {
  const deps = packageJson.devDependencies
  return Object.keys(deps)
    .filter(key => {
      const dep = deps[key]
      return dep.startsWith('file:packages/')
    })
    .map(key => {
      const dep = deps[key]
      const pathToModule = path.resolve('.', dep.substr(5))
      const pack = require(path.join(pathToModule, 'package.json'))
      return pack
    })
}

export function getPackageEntryPoints() {
  return getPackageDependencies().reduce((entry, pack) => {
    const entryPoints = getPackageEntryPoint(pack)
    return {
      ...entry,
      [pack.name]: entryPoints
    }
  }, {})
}

export function getPackageEntryPoint(pack) {
  const mainJsPath = path.resolve('.', 'packages', pack.name, pack.main)
  return [`plugin-loader!${mainJsPath}`, ...getPackageStyleSheets(pack)]
}

export function getPackageStyleSheets(pack) {
  const { styleSheets = [`${pack.name}.less`, `${pack.name}.css`] } = pack
  const entries = []
  if (styleSheets instanceof Array) {
    for (const f of styleSheets) {
      const styleSheetPath = path.resolve(
        '.',
        'packages',
        pack.name,
        'styles',
        f
      )
      if (fs.existsSync(styleSheetPath)) {
        entries.push(styleSheetPath)
      }
    }
  }
  return entries
}
