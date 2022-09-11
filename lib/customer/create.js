import request from '../utilities/request.js'

const config = {
  module: 'customers',
  url: '/customers',
  name: 'create',
  method: 'post',
}

const validate = (customer) => customer // TODO: throw if invalid

export default async function create(customer) {
  validate(customer)
  try {
    const response = await request({ ...config, data: customer })
    if (response.data.status === true) return response.data.data
    throw new Error(
      `failed to create customer[${customer}][${response.data.message}]`,
    )
  } catch (error) {
    console.log({ error })
    throw new Error(`failed to create customer[${customer}]`)
  }
}
