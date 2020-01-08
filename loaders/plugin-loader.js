export default function(source) {
  return `
    var module = {};
    ${ source }
    inkdropRegisterPlugin(module.exports);
  `;
}
