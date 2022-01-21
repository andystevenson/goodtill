import { log } from './lib/internal/env.js'
import goodtill from '@andystevenson/goodtill'
import login from '@andystevenson/goodtill/authentication/login'
import loggedIn from '@andystevenson/goodtill/authentication/loggedIn'
import logout from '@andystevenson/goodtill/authentication/logout'

const run = async (obj, ...args) => {
  const [name, fn] = Object.entries(obj)[0]
  log.info(`Running ${name}...`)
  const r = await fn()
  log.info(`Ran ${name} ${Date.now()}`)
}

// log.info({ goodtill })

const functions = (obj) =>
  Object.keys(obj).reduce((all, current) => {
    console.log({ current, all })
    const temp = {}
    const recurse = typeof obj[current] === 'object'
    if (recurse) {
      all.push(...functions(obj[current]))
      return all
    }
    temp[current] = obj[current]
    all.push(temp)
    return all
  }, [])

const all = functions(goodtill)
all.map(async (fn) => {
  await login()
  await run(fn)
  await logout()
})
