import read from '../utilities/read.js'

const sales = async (id) => read('customers', `/customers/${id}/sales`)

export default sales
