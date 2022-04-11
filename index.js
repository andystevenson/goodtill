import { log } from './lib/internal/env.js'
import goodtill from '@andystevenson/goodtill'
import login from '@andystevenson/goodtill/authentication/login'
import loggedIn from '@andystevenson/goodtill/authentication/loggedIn'
import logout from '@andystevenson/goodtill/authentication/logout'

const run = async (obj, ...args) => {
  const [name, fn] = Object.entries(obj)[0]
  try {
    if (name === 'every') {
      log.info(`Skipping ${name}...`)
      return
    }
    log.info(`Running ${name}...`)
    await login()
    const r = await fn(...args)
    // log.info({ r })
    await logout()
    log.info(`Ran ${name} ${Date.now()}`)
  } catch (error) {
    log.error(`Failed ${name} [${error.message}]`)
  }
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

const process = async (previous, next) => {
  await previous
  return run(next)
}

all.reduce(process, Promise.resolve())
