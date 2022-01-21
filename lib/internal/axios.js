import { inspect } from 'util'
import { debug } from './env.js'
import http from '../utilities/http.js'

const DEBUG = debug.extend('http')

import format from './format.js'
import axios from 'axios'

const iResponse = (response) => {
  const { status, data } = response
  return response
}

const iError = (error) => {
  return Promise.reject(error)
}

const goodtill = axios.create({ baseURL: process.env.GOODTILL_BASE_URL })
goodtill.interceptors.response.use(iResponse, iError)

// Log content type

DEBUG('defaults \n%O', axios.defaults)
export default goodtill
