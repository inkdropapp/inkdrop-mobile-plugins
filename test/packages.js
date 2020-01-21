import test from 'ava'
import plugins from '../src/index'

test('package metadata', t => {
  for (const p of plugins) {
    t.is(
      typeof p.repository,
      'string',
      `'${p.name}' must have "repository" field`
    )

    t.true(
      p.description.indexOf('plugin') < 0,
      `'${p.name}' must not have "plugin" word in its description`
    )

    t.is(
      typeof p.readme,
      'string',
      `'${p.name}' must have 'README-mobile.md' document`
    )

    t.true(
      p.readme.indexOf('plugin') < 0,
      `'${p.name}' must not have "plugin" word in its readme`
    )
  }
  t.pass()
})
