import { debug, log } from '../internal/env.js'
import axios from '../internal/axios.js'
import format from '../internal/format.js'
import nothing from '../internal/nothing.js'

const validate = (config) => {
  config.before ||= nothing
  config.after ||= nothing
}

export default async (config) => {
  try {
    validate(config)

    config.before(config)
    let response = await axios(config)

    // if after transforms the response use it in preference
    const after = config.after(response)
    response = after ? after : response

    return response
  } catch (error) {
    let { module, name } = config
    module ||= 'utilities'
    name ||= 'request'
    let DEBUG = debug.extend(module).extend(name)

    const message = `${module}:${name}\n ${format.error(error, true)}`
    log.error(message)
    DEBUG('Error %O', error)

    throw new Error(message)
  }
}
