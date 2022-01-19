import { debug, log } from '../internal/env.js'
import auth from '../internal/auth.js'
const DEBUG = debug.extend('autentication').extend('credentials')

export default () => {
  const credentials = auth()
  if (credentials) return credentials
  const message = 'not logged in'
  DEBUG(message)
  log.warn(message)
  throw new Error(message)
}
