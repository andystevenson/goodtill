import { STATUS_CODES } from 'http'

export default class http {
  static status(code = 0) {
    return STATUS_CODES[code]
  }

  static successful(code = 0) {
    return code >= 200 && code < 300 && STATUS_CODES[code]
  }
}
