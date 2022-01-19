import login from './login.js'
import logout from './logout.js'
import refresh from './refresh.js'
import every from './every.js'
import credentials from './credentials.js'
import config from './config.js'

export {
  login,
  login as create,
  logout,
  logout as invalidate,
  refresh,
  every,
  credentials,
  config,
}

export default {
  login,
  create: login,
  logout,
  invalidate: logout,
  refresh,
  every,
  credentials,
  config,
}
