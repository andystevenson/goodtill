import request from '../utilities/request.js'

const validate = (customer) => customer // TODO: throw if invalid

export default async function update(customer) {
  validate(customer)
  console.log('creating a customer', customer)
  try {
    const config = {
      module: 'customers',
      url: `/customers/${customer.id}`,
      name: 'update',
      method: 'put',
      data: customer,
    }
    const response = await request(config)
    if (response.data.status === true) return response.data.data
    throw new Error(
      `failed to update customer[${customer}][${response.data.message}]`,
    )
  } catch (error) {
    console.log({ error })
    throw new Error(`failed to update customer[${customer}]`)
  }
}
