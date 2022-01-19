import request from '../utilities/request.js'
import isUuid from '../utilities/isUuid.js'
import transformResponse from '../utilities/transformResponse.js'

export default async (search, field = 'name') => {
  const url = '/categories'

  return await request({
    module: 'category',
    name: 'read',
    url: isUuid(search) ? `${url}/${search}` : url,
    transformResponse: transformResponse(search, field),
  })
}
