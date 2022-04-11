import read, { reader } from '../utilities/read.js'

const customerGroup = async (id, field, options) =>
  read('customerGroups', '/customerGroups', id, field, options)
export const customerGroups = reader('customerGroups')
export const all = customerGroups
export default customerGroup
