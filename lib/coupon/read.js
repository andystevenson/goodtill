import read from '../utilities/read.js'

export default async (search, field) => {
  const module = 'coupon'
  const url = '/coupons'

  return read(module, url, search, field)
}
