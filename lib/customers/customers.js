import { debug, log } from './env.js'
const DEBUG = debug.extend('customers')

import axios from './axios.js'
const API = '/customers'

export default async () => {
  try {
    const response = await axios.get(API)
    const customers = response.data.data
    // log.info({ customers })
    DEBUG(`response %O`, response.data)
    return customers
  } catch (error) {
    throw new Error(`customers failure: ${error.message}`)
  }
}
