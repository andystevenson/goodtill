import { inspect } from 'util'
import { debug } from './env.js'
const DEBUG = debug.extend('http')

import format from './format.js'
import axios from 'axios'
import axiosDebugLog from 'axios-debug-log'

axiosDebugLog({
  request: function (DEBUG, config) {
    DEBUG('request \n%O', format.request(config))
  },
  response: function (DEBUG, response) {
    DEBUG('response \n%O', format.response(response))
  },
  error: function (DEBUG, error) {
    // Read https://www.npmjs.com/package/axios#handling-errors for more info
    DEBUG(
      'Error with %O',
      error,
      // error.response.config.baseURL,
      // error.response.config.url,
      // error.response.headers['content-type'],
      // error.response.config.data,
      // error.response.status,
      // error.response.statusText,
      // error.response.data,
    )
  },
})

const goodtill = axios.create({ baseURL: process.env.GOODTILL_BASE_URL })
axiosDebugLog.addLogger(goodtill, DEBUG)

// Log content type

DEBUG('defaults \n%O', axios.defaults)
export default goodtill
