import { debug, log } from '../internal/env.js'
import auth from '../internal/auth.js'
const DEBUG = debug.extend('autentication').extend('credentials')

export default (update) => {
  // merge credentials if merged in

  const credentials = auth()
  if (credentials) {
    if (!update) return credentials
    return { ...credentials, ...update }
  }
  const message = 'not logged in'
  DEBUG(message)
  log.error(message)
  throw new Error(message)
}
