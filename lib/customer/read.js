import read from '../utilities/read.js'

export default async (search, field) => {
  const module = 'customer'
  const url = '/customers'

  return read(module, url, search, field)
}
