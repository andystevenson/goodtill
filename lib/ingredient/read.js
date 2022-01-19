import read from '../utilities/read.js'
import isUuid from '../utilities/isUuid.js'

export default async (search, field) => {
  const module = 'ingredient'
  const url = '/ingredients'

  const fieldname =
    !field && typeof search === 'string' && !isUuid(search)
      ? 'ingredient_name'
      : field

  return read(module, url, search, fieldname)
}
