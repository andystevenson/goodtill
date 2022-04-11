import { login, logout } from '@andystevenson/goodtill/authentication'
import {
  create,
  read,
  details,
  customers,
  sales,
  update,
} from '@andystevenson/goodtill/customer'

import {
  read as readGroup,
  customerGroups,
  all,
} from '@andystevenson/goodtill/customerGroup'
await login()
// const all = await customers()
// console.log({ all })
// const customer = await read('344fc443-edb3-4fff-929d-2a51cdba6645')
// console.log({ customer })
// const detail = await details('344fc443-edb3-4fff-929d-2a51cdba6645')
// console.log({ detail })
// const purchases = await sales('344fc443-edb3-4fff-929d-2a51cdba6645')
// console.log({ purchases })
// const customer = await create({ name: 'Andy Randomer' })
// console.log({ customer })
// const id = 'a32de13c-b535-4c5a-8d83-f20e5048a701'
// const customer = await read(id)
// console.log({ customer })
// const customer_group_id = '5cfb66a0-8a47-4ead-a188-21e5d7acd247'
// const email = 'andy@random.com'
// const address = 'Apartment 3, 609 Warwick Road'
// const city = 'Solihull'
// const county = 'West Midlands'
// const postcode = 'B91 1AH'
// const active = 1
// const mobile = '07920027695'
// const phone = ''
// const website = 'andystevenson.dev'
// const extra_notes = 'Some notes on my account'
// const account_code = 'ACC-424242'
// const opt_in_email = 1
// const is_account_customer = 1
// const membership_no = '1010101'
// const title = 'Mr'
// const first_name = 'Andy'
// const last_name = 'Stevenson'
// const gender = 'male'
// const date_of_birth = '1964-01-30'
// const source = 'ashborne2sumup'
// const membership_expiry_date = '2023-01-01'
// const custom_field_1 = '1 stuff'
// const custom_field_2 = '2 stuff'
// const custom_field_3 = '3 stuff'
// const custom_field_4 = '4 stuff'

// const updated = await update({
//   id,
//   customer_group_id,
//   email,
//   address,
//   city,
//   county,
//   postcode,
//   active,
//   mobile,
//   phone,
//   website,
//   extra_notes,
//   account_code,
//   opt_in_email,
//   is_account_customer,
//   membership_no,
//   title,
//   first_name,
//   last_name,
//   gender,
//   date_of_birth,
//   source,
//   membership_expiry_date,
//   custom_field_1,
//   custom_field_2,
//   custom_field_3,
//   custom_field_4,
// })
// console.log({ updated })

const groups = await customerGroups()
console.log({ groups })
const group = await readGroup('5cfb66a0-8a47-4ead-a188-21e5d7acd247')
console.log({ group })
await logout()
