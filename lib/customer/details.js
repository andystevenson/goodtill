import read from '../utilities/read.js'

const details = async (id, field, options) =>
  read('customers', '/customers/details', id, field, options)

export default details
