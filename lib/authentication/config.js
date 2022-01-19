import request from '../utilities/request.js'
import transformResponse from '../utilities/transformResponse.js'

export default async (outletId) => {
  return request({
    module: 'authentication',
    name: 'config',
    url: '/config',
    headers: outletId ? { 'Outlet-Id': outletId } : {},
    transformResponse: transformResponse(),
  })
}
