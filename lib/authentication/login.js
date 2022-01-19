import { debug, log } from '../internal/env.js'
const DEBUG = debug.extend('authentication').extend('login')

import axios from '../internal/axios.js'
import auth from '../internal/auth.js'
import request from '../utilities/request.js'

const { GOODTILL_SUBDOMAIN, GOODTILL_USERNAME, GOODTILL_PASSWORD } = process.env

const data = {
  subdomain: GOODTILL_SUBDOMAIN,
  username: GOODTILL_USERNAME,
  password: GOODTILL_PASSWORD,
}
const transformResponse = [
  (data) => {
    const response = JSON.parse(data)

    const {
      user_name,
      token,
      user_level,
      client_id,
      client_name,
      client_subdomain,
      current_outlet_id,
      current_outlet_name,
      config,
    } = response
    const result = {
      user: user_name,
      user_name,
      token,
      user_level,
      client_id,
      client_name,
      client_subdomain,
      current_outlet_id,
      current_outlet_name,
      config,
      headers: { Authorization: `Bearer ${response.token}` },
    }
    axios.defaults.headers.common = result.headers
    log.info(`Logged in [${user_name}]`)
    auth(result)
    DEBUG('defaults %O', axios.defaults)
    return result
  },
]

export default async () => {
  return request({
    module: 'authentication',
    name: 'login',
    url: '/login',
    method: 'POST',
    data,
    transformResponse,
  })
}
