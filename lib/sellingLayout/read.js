import read from '../utilities/read.js'
import isUuid from '../utilities/isUuid.js'

export default async (search, field) => {
  const module = 'sellingLayout'
  const url = '/selling_layouts'

  const fieldname =
    !field && typeof search === 'string' && !isUuid(search)
      ? 'quick_key_name'
      : field

  return read(module, url, search, fieldname)
}
