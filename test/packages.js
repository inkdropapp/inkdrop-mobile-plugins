import test from 'ava'
import plugins from '../src/index'

test('description should not include "plugin" word', t => {
  for (const p of plugins) {
    const i = p.description.indexOf('plugin')
    if (i >= 0) {
      t.fail(`'${p.name}' has "plugin" word in its description`)
      return
    }
  }
  t.pass()
})

test('readme should not include "plugin" word', t => {
  for (const p of plugins) {
    if (typeof p.readme !== 'string') {
      t.fail(`'${p.name}' must have 'README-mobile.md' document`)
    }
    const i = p.readme.indexOf('plugin')
    if (i >= 0) {
      t.fail(`'${p.name}' has "plugin" word in its readme`)
      return
    }
  }
  t.pass()
})
