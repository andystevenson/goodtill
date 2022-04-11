import create from './create.js'
import read, { customers, all } from './read.js'
import details from './details.js'
import sales from './sales.js'
import update from './update.js'

export { create, read, details, customers, all, sales, update }

export default {
  module: 'customers',
  url: '/customers',
  create,
  read,
  details,
  customers,
  all,
  sales,
  update,
}
