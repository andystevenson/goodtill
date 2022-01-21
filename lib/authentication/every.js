import refresh from './refresh.js'
import nothing from '../internal/nothing.js'
import { setInterval } from 'timers/promises'
import throwIfNotLoggedIn from '../internal/throwIfNotLoggedIn.js'

export default async (
  interval = 1000,
  what = refresh,
  callback = nothing,
  times = Number.MAX_SAFE_INTEGER,
) => {
  throwIfNotLoggedIn()

  let iteration = 0
  for await (const doWhat of setInterval(interval, what)) {
    if (iteration === times) break
    const refreshed = await doWhat()
    callback(refreshed)
    iteration++
  }
}
