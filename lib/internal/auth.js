import { log } from '../internal/env.js'
import axios from './axios.js'

export let loggedIn = undefined

export default (credentials) => {
  if (credentials === null) return (loggedIn = undefined)
  if (credentials) {
    loggedIn = loggedIn ? { ...loggedIn, ...credentials } : credentials
    axios.defaults.headers.common = {
      Authorization: `Bearer ${loggedIn.token}`,
    }

    if (loggedIn) log.info(`Authenticated [${loggedIn.user_name}]`)
  }

  return loggedIn
}
