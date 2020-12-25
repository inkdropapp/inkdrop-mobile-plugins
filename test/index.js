import test from 'ava'

global.modules = {
  react: require('react'),
  'prop-types': require('prop-types'),
  inkdrop: {
    markdownRenderer: {}
  }
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

test.serial.cb('markdown-emoji', t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'markdown-emoji')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
    t.end()
  }

  require('../lib/markdown-emoji')
})

test.serial.cb('flowchart', t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'flowchart')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
    t.end()
  }

  require('../lib/flowchart')
})

test.serial.cb('toc', t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'toc')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
    t.end()
  }

  require('../lib/toc')
})

test.serial.cb('mermaid', t => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'mermaid')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
    t.end()
  }

  require('../lib/mermaid')
})

test.serial.cb('wiki_links', (t) => {
  global.window.inkdrop.packages.setPackageMainModule = (name, p) => {
    t.is(name, 'wiki_links')
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, "function")
    t.is(typeof p.deactivate, "function")
    t.end()
  }

  require('../lib/wiki_links')
})
