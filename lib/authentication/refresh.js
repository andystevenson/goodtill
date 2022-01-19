import { debug, log } from '../internal/env.js'
import request from '../utilities/request.js'
import axios from '../internal/axios.js'
import auth from '../internal/auth.js'
import http from '../utilities/http.js'

const DEBUG = debug.extend('authentication').extend('refresh')

const transformResponse = [
  (data) => {
    console.log('transform refresh called')
    const response = JSON.parse(data)
    if (data.status_code && !http.successful(data.status_code)) return response
    console.log('processing refresh')
    const result = {
      ...response,
      headers: { Authorization: `Bearer ${response.token}` },
    }
    axios.defaults.headers.common = result.headers
    const { user } = auth(result)
    log.info(`Refreshed Token [${user}]`)
    DEBUG('defaults %O', axios.defaults)
    return result
  },
]

const config = {
  module: 'authentication',
  name: 'refresh',
  url: '/refresh_token',
  transformResponse,
}

export default async () => {
  return request(config)
}
