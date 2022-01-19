import { log } from '../internal/env.js'
import auth from '../internal/auth.js'
import request from '../utilities/request.js'

export default async () => {
  return request({
    module: 'authentication',
    name: 'logout',
    url: '/logout',
    method: 'POST',
    transformResponse: [
      () => {
        const { user } = auth()
        auth(null) // discards login credentials
        log.info(`Logged out [${user}]`)
      },
    ],
  })
}
