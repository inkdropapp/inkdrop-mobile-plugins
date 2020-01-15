import fs from 'fs'
import path from 'path'
import index from '../src/index'

const json = JSON.stringify(index, null, 2)
const jsonp = `window.inkdrop.packages.setAvailablePackageMetadata(${json})`
fs.writeFileSync(path.resolve(__dirname, '..', 'lib', 'index.js'), jsonp)
