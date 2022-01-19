import read from '../utilities/read.js'

export default async (search, field) => {
  const module = 'brand'
  const url = '/brands'

  return read(module, url, search, field)
}
