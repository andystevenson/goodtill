import { debug, log } from '../internal/env.js'
import request from '../utilities/request.js'
import auth from '../internal/auth.js'
import credentials from './credentials.js'
import throwIfNotLoggedIn from '../internal/throwIfNotLoggedIn.js'

const config = {
  module: 'authentication',
  name: 'refresh',
  url: '/refresh_token',
  after(response) {
    const newCredentials = auth(credentials(response.data))
    log.info(`Refreshed Token [${newCredentials.user_name}]`)
  },
}

export default async () => {
  throwIfNotLoggedIn()

  try {
    return request(config)
  } catch (error) {
    const message = `refresh token failed [${error.message}]`
    log.error(message)
    const DEBUG = debug.extend('authentication').extend('refresh')
    DEBUG(message, error)
    throw new Error(error)
  }
}
