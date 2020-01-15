import fs from 'fs'
import path from 'path'
import index from '../src/index'

const json = JSON.stringify(index, null, 2)
fs.writeFileSync(path.resolve(__dirname, '..', 'lib', 'index.json'), json)
