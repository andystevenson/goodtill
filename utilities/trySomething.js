import { login, logout } from '@andystevenson/goodtill/authentication'
import { categorize } from '@andystevenson/goodtill/category'
import { read } from '@andystevenson/goodtill/product'

import util from 'node:util'
const categories = await categorize()

const lunch = Object.values(categories)
  .find((category) => category.name === 'SUNDAY LUNCH')
  .children.map((lunch) => ({
    name: lunch.product_name,
    display: lunch.display_name,
    variants: lunch.has_variant,
    count: lunch.current_variants.length,
    parent: lunch.parent_product_id,
  }))
const output = util.inspect(lunch, false, null, true)
console.log(output)
// await login()
// const main = await read('2b55e287-0d63-45ef-8390-9214e26c3947')
// console.log({ main })
// await logout()
