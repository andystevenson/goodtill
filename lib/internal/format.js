import { inspect } from 'util'

const maxStringLength = process.env.FORMAT_MAX_STRING_LENGTH || 80

export default class format {
  static stringify(object) {
    return inspect(object, { colors: true, maxStringLength })
  }

  static request = (r, stringify = false) => {
    const result = {
      base: r.baseURL,
      url: r.url,
      method: r.method.toUpperCase(),
      data: r.data,
    }

    if (!result.data) delete result.data

    return stringify ? format.stringify(result) : result
  }

  /**
   *
   * @param {*} r
   * @param {boolean} stringify
   * @returns
   */
  static response(r, stringify = false) {
    const result = {
      base: r.config.baseURL,
      url: r.config.url,
      method: r.config.method.toUpperCase(),
      date: r.headers.date.toLocaleUpperCase(),
      type: r.headers['content-type'],
      data: r.config.data,
      status: r.status,
      statusText: r.statusText,
      responded: r.data,
    }
    if (!result.data) delete result.data
    if (!result.responded) delete result.responded

    if (result.data && result.type === 'application/json')
      result.data = JSON.parse(result.data)

    return stringify ? format.stringify(result) : result
  }

  static error(e, stringify = false) {
    // Read https://www.npmjs.com/package/axios#handling-errors for more info
    let result = {}
    if (e.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      result = format.response({ ...e.response, error: e.message })
    } else if (e.request) {
      // The request was made but no response was received
      // `e.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      result = format.request({ ...e.config, error: e.message })
    } else {
      // Something happened in setting up the request that triggered an Error
      result = { error: e.message }
    }
    return stringify ? format.stringify(result) : result
  }
}
