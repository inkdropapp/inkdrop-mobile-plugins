import test from 'ava'

global.modules = {
  react: require('react'),
  'prop-types': require('prop-types')
}

global.window = {}

test.serial.cb('math', t => {
  global.inkdropRegisterPlugin = (p) => {
    t.is(p instanceof Object, true)
    t.is(typeof p.activate, 'function')
    t.is(typeof p.deactivate, 'function')
		t.end();
  }

  require('../lib/math')
})
