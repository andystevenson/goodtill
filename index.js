import goodtill from '@andystevenson/goodtill'
import {
  login,
  logout,
  refresh,
  every,
  credentials,
} from '@andystevenson/goodtill/authentication'
import category from '@andystevenson/goodtill/category'
await login()
const id = credentials()
// console.log({ id })
const c = await category.read()
// console.log({ c })
const ac = await category.read('fdd75b81-2a08-404d-a05b-fa54f928c888')
// // console.log({ ac })
const w = await category.read('BEER')
// // console.log({ w })
const r = await category.read(/^S.*$/i)
// // console.log({ r })
const a = await category.read([/^S.*$/i, 'BEER', 'FOOD'])
console.log({ a })
await refresh()
await every(2000, () => console.log('again'), 1)
await logout()
