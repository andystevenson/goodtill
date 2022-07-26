import { login, logout } from '@andystevenson/goodtill/authentication'
import { layouts, read } from '@andystevenson/goodtill/sellingLayout'

await login()

const allLayouts = await layouts()
const main = await read('e118f484-c7c8-4839-a740-fe8012e80976')
console.log({ allLayouts, main })
await logout()
