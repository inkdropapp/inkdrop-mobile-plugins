import { parseQuery } from 'loader-utils'

export default function(source) {
  const query = parseQuery(this.resourceQuery)
  const name = query.name

  return `
    var module = {};
    ${source}
    window.inkdrop.packages.setPackageMainModule(${JSON.stringify(
      name
    )}, module.exports);
  `
}
