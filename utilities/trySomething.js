import { login, logout, goodtill } from '@andystevenson/goodtill'

async function bar() {
  const daterange = '01/10/2022 00:00 AM - 04/10/2022 00:00 AM'
  const url = 'https://api.thegoodtill.com/api/report/sales/summary'

  await login()
  const report = await goodtill.post(url, { daterange })
  await logout()

  console.log(report.data.data)
}

bar()
