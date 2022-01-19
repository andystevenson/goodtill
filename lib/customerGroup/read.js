import read from '../utilities/read.js'

export default async (search, field) => {
  const module = 'customerGroup'
  const url = '/customerGroups'

  return read(module, url, search, field)
}
