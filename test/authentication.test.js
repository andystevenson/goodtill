import test from 'ava'
import { error } from './utilities/env.js'

import {
  login,
  logout,
  refresh,
  invalidate,
  credentials,
} from '@andystevenson/goodtill/authentication'

test.skip('login', async (t) => {
  const l = await login()
  t.truthy(l, error('we are not logged in'))
  t.is(l.user, 'Andy Stevenson', error('not the right user', 'at all'))
  t.is(l.config?.subdomain, 'WestWarwicksSportsClub')
  t.snapshot(l.user)
  t.snapshot(l.config?.subdomain)
})

test('bad credentials @ login', async (t) => {
  process.env.GOODTILL_PASSWORD = 'garbage'
  await t.throwsAsync(login(), {
    instanceOf: Error,
    message: /^bad goodtill credentials/,
  })
})

test('bar', async (t) => {
  const bar = Promise.resolve('bar')
  t.is(await bar, 'bar')
})
