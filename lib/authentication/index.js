import login from './login.js'
import logout from './logout.js'
import refresh from './refresh.js'
import every from './every.js'
import credentials from './credentials.js'
import config from './config.js'
import loggedIn from './loggedIn.js'

export {
  login,
  login as create,
  logout,
  logout as invalidate,
  logout as delete,
  refresh,
  every,
  credentials,
  config,
  config as read,
  loggedIn,
}

export default {
  login,
  credentials,
  refresh,
  config,
  every,
  logout,
  create: login,
  loggedIn,
  read: config,
  invalidate: logout,
}
