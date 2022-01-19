import read from '../utilities/read.js'
import isUuid from '../utilities/isUuid.js'

// small hack to get round the fact products have no 'name' field to search

export default async (search, field) => {
  const module = 'product'
  const url = '/products'

  const fieldname =
    !field && typeof search === 'string' && !isUuid(search)
      ? 'product_name'
      : field

  return read(module, url, search, fieldname)
}
