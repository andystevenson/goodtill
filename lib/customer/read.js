import read, { reader } from '../utilities/read.js'

const customer = async (id, field, options) =>
  read('customers', '/customers', id, field, options)
export const customers = reader('customers')
export const all = customers
export default customer
