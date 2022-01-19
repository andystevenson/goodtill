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
import group from '@andystevenson/goodtill/customerGroup'
import product from '@andystevenson/goodtill/product'
import brand from '@andystevenson/goodtill/brand'
import modifier from '@andystevenson/goodtill/modifier'
import tag from '@andystevenson/goodtill/tag'
import supplier from '@andystevenson/goodtill/supplier'
import ingredient from '@andystevenson/goodtill/ingredient'
import layout from '@andystevenson/goodtill/sellingLayout'
import coupon from '@andystevenson/goodtill/coupon'

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

{
  const g = await group.read()
  console.log({ g })
}

{
  const gen = await group.read('General')
  console.log({ gen })
}

{
  const gen = await group.read('5cfb66a0-8a47-4ead-a188-21e5d7acd247')
  console.log({ gen })
}

{
  const p = await product.read()
  console.log({ p })
}
{
  const cc = await product.read('Coffee Cointreau', 'product_name')
  console.log({ cc })
}
{
  const cc2 = await product.read('Coffee Cointreau')
  console.log({ cc2 })
}
{
  const cb = await product.read('aaf5c13d-3d31-4db9-8eb9-31e4dc841de4')
  console.log({ cb })
}
{
  const m = await product.read('bbq')
  console.log({ m })
}
{
  const b = await brand.all()
  console.log({ b })
}
{
  const m = await modifier.all()
  console.log({ m })
}
{
  const m = await modifier.read('strawberry')
  console.log({ m })
}
{
  const t = await tag.all()
  console.log({ t })
}
{
  const t1 = await tag.read('tag 1')
  console.log({ t1 })
}
{
  const s = await supplier.all()
  console.log({ s })
}
{
  const s1 = await supplier.read('westbourne')
  console.log({ s1 })
}
{
  const i = await ingredient.all()
  console.log({ i })
}
{
  const i = await ingredient.read('potatoes')
  console.log({ i })
}
{
  const l = await layout.all()
  console.log({ l })
}
{
  const l = await layout.read('Main Selling Layout')
  console.log({ l })
}
{
  const l = await layout.read('e118f484-c7c8-4839-a740-fe8012e80976')
  console.log({ l })
}

{
  const c = await coupon.coupons()
  console.log('%o', { c })
}
// {
//   // cannot fetch an individual coupon
//   const c = await coupon.read('0cb35a70-4bb7-454d-9d78-e2844d09140c')
//   console.log('%o', { c })
// }

////////////////
{
  {
    await refresh()
    await every(2000, () => console.log('refreshed'), 1)
    const cfg = await config()
    console.log({ cfg })
  }

  await logout()
}
