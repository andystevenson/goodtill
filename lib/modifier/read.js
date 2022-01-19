import read from '../utilities/read.js'
import isUuid from '../utilities/isUuid.js'

export default async (search, field) => {
  const module = 'modifier'
  const url = '/modifiers'

  const fieldname =
    !field && typeof search === 'string' && !isUuid(search)
      ? 'modifier_name'
      : field

  return read(module, url, search, fieldname)
}
