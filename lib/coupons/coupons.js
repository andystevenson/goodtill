import { debug, log } from './env.js'
const DEBUG = debug.extend('coupons')

import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import querystring from 'querystring'

import axios from './axios.js'
const API = '/coupons'

export default async (coupon) => {
  try {
    const params = querystring.stringify(coupon)
    log.info({ params })
    const response = await axios.post(API, params)
    const result = response
    // log.info({ response })
    DEBUG(`response %O`, response.data)
    return result
  } catch (error) {
    DEBUG(`coupons failure: `, error)
    log.info(error.response.data)
    throw new Error(
      `coupons failure: ${error.message} \n[${error.response.data.message}]`,
    )
  }
}

export const template = () => {
  return {
    code: nanoid(),
    amount: 1.2,
    percentage: 0,
    expires: dayjs().add(1, 'day'),
    maxUses: 1,
    categories: [],
    maxUsesPerCustomer: 0,
    onPos: 1,
    active: 1,
    customerGroups: [],
  }
}

export const create = (coupon = template()) => {
  const {
    code,
    percentage: is_percentage,
    amount,
    expires,
    onPos: supports_pos,
    maxUses: max_uses,
    active,
    maxUsesPerCustomer: max_uses_per_customer,
    categories: category_ids,
    customerGroups: customer_group_ids,
  } = coupon

  return {
    code,
    is_percentage,
    amount,
    max_uses,
    // max_uses_per_customer,
    expires_at: expires.format('YYYY-MM-DD'),
    supports_pos,
    supports_oc_collection: 0,
    supports_oc_delivery: 0,
    supports_oc_dropoff: 0,
    active,
    category_restricted: category_ids.length > 0 ? 1 : 0,
    category_ids,
    // customer_group_restricted: customer_group_ids.length > 0,
    // customer_group_ids,
  }
}
