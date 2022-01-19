import { log } from '../internal/env.js'

export let loggedIn = undefined

export default (credentials) => {
  if (credentials === null) return (loggedIn = undefined)
  if (credentials) {
    loggedIn = loggedIn ? { ...loggedIn, ...credentials } : credentials
    if (loggedIn) log.info(`Authenticated [${loggedIn.user}]`)
  }

  return loggedIn
}
