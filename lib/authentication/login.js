import { debug, log } from '../internal/env.js'
import format from '../internal/format.js'
const DEBUG = debug.extend('authentication').extend('login')

import auth from '../internal/auth.js'
import request from '../utilities/request.js'

export default async () => {
  const {
    GOODTILL_SUBDOMAIN: subdomain,
    GOODTILL_USERNAME: username,
    GOODTILL_PASSWORD: password,
  } = process.env

  const data = { subdomain, username, password }

  if (!subdomain || !username)
    throw new Error(`bad goodtill credentials!\n${format.stringify(data)}`)

  return request({
    module: 'authentication',
    name: 'login',
    url: '/login',
    method: 'POST',
    data,
    after(response) {
      const { user_name } = response.data
      auth(response.data)
      log.info(`Logged in [${user_name}]`)
    },
  })
}
