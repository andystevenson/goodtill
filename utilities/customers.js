import { login, logout } from '@andystevenson/goodtill/authentication'
import { customers, update } from '@andystevenson/goodtill/customer'
import { customerGroups } from '@andystevenson/goodtill/customerGroup'

import { inspect as inspector } from 'node:util'
const options = { depth: null, colors: true }
const log = (arg) => console.log(inspector(arg, options))

await login()
const allCustomers = await customers()
const allGroups = await customerGroups()
log(allCustomers)
// log(allGroups)

const updated = await update({
  id: 'a32de13c-b535-4c5a-8d83-f20e5048a701',
  company_name: 'wibble',
})

log(updated)
await logout()
