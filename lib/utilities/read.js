import request from '../utilities/request.js'
import isUuid from '../utilities/isUuid.js'
import transformResponse from '../utilities/transformResponse.js'
import pluralize from 'pluralize'

const stitchUrl = (url, search, field) => {
  const searchById = !field || field === 'id'
  return searchById && isUuid(search) ? `${url}/${search}` : url
}

const processAltField = (field, search, options) => {
  if (!options.alt) return field
  const fieldname =
    !field && typeof search === 'string' && !isUuid(search)
      ? options.alt
      : field
  return fieldname
}

const processOptions = (module, url, search, field, options = {}) => {
  const o = { ...options }
  const m = module ? module : 'utilities'
  const u = options.uuidUrl
    ? options.uuidUrl(url, search, field)
    : stitchUrl(url, search, field)
  const f = processAltField(field, search, options)
  if (!o.transformResponse) o.transformResponse = transformResponse(search, f)
  return { module: m, url: u, search, field: f, options: o }
}

export default async function read(module, url, search, field, options = {}) {
  const final = processOptions(module, url, search, field, options)
  // console.log('read', { module, url, search, field, options, final })
  return request({
    module: final.module,
    name: 'read',
    url: final.url,
    transformResponse: final.options.transformResponse,
  })
}

export const reader = (module, url, defaults = {}) => {
  const finalUrl = url ? url : `/${pluralize(module)}`
  return async (search, field, options = defaults) => {
    // console.log({ module, url, finalUrl, options })
    return read(module, finalUrl, search, field, options)
  }
}
