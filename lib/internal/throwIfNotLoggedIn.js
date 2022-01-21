import { debug, log } from '../internal/env.js'
import auth from '../internal/auth.js'

const DEBUG = debug.extend('internal').extend('not-logged-in')

export default () => {
  if (auth()) return
  const message = 'not logged in'
  DEBUG(message)
  log.error(message)
  throw new Error(message)
}
