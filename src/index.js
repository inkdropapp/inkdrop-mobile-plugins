import path from 'path'
import fs from 'fs'
import marked from 'marked'
import { getPackageDependencies } from '../utils/package-dependency'

const plugins = getPackageDependencies().map(pack => {
  const readmePath = path.join(__dirname, '..', 'packages', pack.name, 'README.md')
  let readme = undefined
  if (fs.existsSync(readmePath)) {
    const md = fs.readFileSync(readmePath, 'utf-8')
    readme = marked(md)
  }
  return {
    ...pack,
    main: `${pack.name}.js`,
    styleSheets:
      pack.styleSheets && pack.styleSheets.length > 0
        ? [`${pack.name}.css`]
        : [],
    readme,
    devDependencies: undefined,
    scripts: undefined
  }
})

export default plugins
