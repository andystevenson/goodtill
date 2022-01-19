import read from '../utilities/read.js'

export default async (search, field) => {
  const module = 'supplier'
  const url = '/suppliers'

  return read(module, url, search, field)
}
