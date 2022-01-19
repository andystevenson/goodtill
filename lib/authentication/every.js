import refresh from './refresh.js'
import nothing from '../internal/nothing.js'
import { setInterval } from 'timers/promises'

export default async (
  interval,
  callback = nothing,
  times = Number.MAX_SAFE_INTEGER,
) => {
  let iteration = 0
  for await (const doRefresh of setInterval(interval, refresh)) {
    if (iteration === times) break
    const refreshed = await doRefresh()
    callback(refreshed)
    iteration++
  }
}
