import { debug } from '../internal/env.js'
import axios from '../internal/axios.js'
import format from '../internal/format.js'

export default async (config) => {
  try {
    // console.log({ config })
    const response = await axios(config)
    return response.data
  } catch (error) {
    let { module, name } = config
    module ||= 'utilities'
    name ||= 'request'
    const message = `${module}:${name}\n ${format.error(error, true)}`
    let DEBUG = debug.extend(module).extend(name)

    DEBUG('Error %O', error)
    throw new Error(message)
  }
}
