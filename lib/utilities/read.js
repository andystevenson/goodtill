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
  return request({
    module: final.module,
    name: 'read',
    url: final.url,
    ...final.options,
  })
}

export const reader = (
  module,
  url,
  defaults = {
    after(r) {
      console.log('reader.after called', Object.keys(r))
      return r.data
    },
  },
) => {
  const finalUrl = url ? url : `/${pluralize(module)}`
  return async (search, field, options = defaults) => {
    return read(module, finalUrl, search, field, options)
  }
}
