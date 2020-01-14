export default function(source) {
  const name = this._module.issuer.name

  return `
    var module = {};
    ${source}
    window.inkdrop.packages.setPackageMainModule(${JSON.stringify(
      name
    )}, module.exports);
  `
}
