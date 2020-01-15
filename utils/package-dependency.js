import path from 'path'
import packageJson from '../package.json'

export function getPackageDependencies() {
  const deps = packageJson.devDependencies
  return Object.keys(deps).filter(key => {
    const dep = deps[key]
    return dep.startsWith('file:packages/')
  }).map(key => {
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
  const {styleSheets} = pack
  const entries = [`plugin-loader!${pack.name}`]
  if (styleSheets instanceof Array) {
    for(let f of styleSheets) {
      const styleSheetPath = path.join(pack.name, 'styles', f)
      entries.push(styleSheetPath)
    }
  }
  return entries
}
