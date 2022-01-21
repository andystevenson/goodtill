import { debug, log } from '../internal/env.js'
import auth from '../internal/auth.js'
import request from '../utilities/request.js'
import throwIfNotLoggedIn from '../internal/throwIfNotLoggedIn.js'

const DEBUG = debug.extend('authentication').extend('login')

export default async () => {
  throwIfNotLoggedIn()

  return request({
    module: 'authentication',
    name: 'logout',
    url: '/logout',
    method: 'POST',
    after() {
      const { user_name } = auth()
      auth(null) // discards login credentials
      log.info(`Logged out [${user_name}]`)
    },
  })
}
