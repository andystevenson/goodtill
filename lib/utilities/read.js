import request from '../utilities/request.js'
import isUuid from '../utilities/isUuid.js'
import transformResponse from '../utilities/transformResponse.js'

const stitchUrl = (url, search, field) => {
  const searchById = !field || field === 'id'
  return searchById && isUuid(search) ? `${url}/${search}` : url
}

export default async (module, url, search, field, uuidUrl = stitchUrl) => {
  return request({
    module,
    name: 'read',
    url: uuidUrl(url, search, field),
    transformResponse: transformResponse(search, field),
  })
}
