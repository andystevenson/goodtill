import read from '../utilities/read.js'

export default async (search, field) => {
  const module = 'tag'
  const url = '/tags'

  return read(module, url, search, field)
}
