import { login, logout } from '@andystevenson/goodtill/authentication'
import { categorize } from '@andystevenson/goodtill/category'
import { read } from '@andystevenson/goodtill/product'

import util from 'node:util'
const categories = await categorize()

const beer = Object.values(categories)
  .find((category) => category.name === 'BEER')
  .children.map((beer) => ({
    name: beer.product_name,
    display: beer.display_name,
    variants: beer.has_variant,
    count: beer.current_variants.length,
    parent: beer.parent_product_id,
  }))
const output = util.inspect(beer, false, null, true)
console.log(output)
// await login()
// const main = await read('2b55e287-0d63-45ef-8390-9214e26c3947')
// console.log({ main })
// await logout()
