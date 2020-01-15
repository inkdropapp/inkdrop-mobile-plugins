import test from 'ava'

global.modules = {
  react: require('react'),
  'prop-types': require('prop-types')
}

// inkdrop app mock
global.window.inkdrop = {
  packages: {},
  commands: {}
}

test.serial.cb('math', t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'math')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
    t.end()
  }

  require('../lib/math')
})

test.serial.cb('sequence-diagrams', t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'sequence-diagrams')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
    t.end()
  }

  require('../lib/sequence-diagrams')
})