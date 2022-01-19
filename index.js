import goodtill from '@andystevenson/goodtill'
import {
  login,
  logout,
  refresh,
  every,
  credentials,
  config,
} from '@andystevenson/goodtill/authentication'
import customer from '@andystevenson/goodtill/customer'
import category from '@andystevenson/goodtill/category'

await login()
const id = credentials()
console.log({ id })
const c = await category.read()
console.log({ c })
const ac = await category.read('fdd75b81-2a08-404d-a05b-fa54f928c888')
console.log({ ac })
const bac = await category.read('fxd75b81-2a08-404d-a05b-fa54f928c888')
console.log({ bac })
const w = await category.read('BEER')
console.log({ w })
const g = await category.read('garbage')
console.log({ g })
const r = await category.read(/^S.*$/i)
console.log({ r })
const a = await category.categories([/^S.*$/i, 'BEER', 'FOOD'])
console.log({ a })
const cname = await category.read(/.*TEAS.*/i, 'category_name')
console.log({ cname })

await refresh()
await every(2000, () => console.log('refreshed'), 1)
let cfg = await config()
console.log({ cfg })

{
  const all = await customer.read()
  console.log({ all })
}
{
  const name = await customer.read('Andy Stevenson')
  console.log({ name })
}
{
  const email = await customer.read('andystevenson@mac.com', 'email')
  console.log({ email })
}
{
  const id = await customer.read('344fc443-edb3-4fff-929d-2a51cdba6645')
  console.log({ id })
}
{
  const badid = await customer.read('34xfc443-edb3-4fff-929d-2a51cdba6645')
  console.log({ badid })
}
{
  const cgid = await customer.read(
    '5cfb66a0-8a47-4ead-a188-21e5d7acd247',
    'customer_group_id',
  )
  console.log({ cgid })
}
{
  const cg = await customer.read('MEMBERS', 'customer_group')
  console.log({ cg })
}
await logout()
