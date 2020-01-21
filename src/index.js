import path from 'path'
import fs from 'fs'
import marked from 'marked'
import {
  getPackageDependencies,
  getPackageStyleSheets
} from '../utils/package-dependency'
import { getRepository } from '../utils/package'

const plugins = getPackageDependencies().map(pack => {
  const readmePath = path.join(
    __dirname,
    '..',
    'packages',
    pack.name,
    'README-mobile.md'
  )
  let readme = undefined
  if (fs.existsSync(readmePath)) {
    const md = fs.readFileSync(readmePath, 'utf-8')
    readme = marked(md)
  }
  const isStylesheetAvailable = getPackageStyleSheets(pack).length > 0
  const repository = getRepository(pack)

  return {
    ...pack,
    main: `${pack.name}.js`,
    styleSheets: isStylesheetAvailable ? [`${pack.name}.css`] : [],
    readme,
    devDependencies: undefined,
    scripts: undefined,
    repository
  }
})

export default plugins
