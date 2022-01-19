import http from './http.js'
import isUuid from './isUuid.js'

export const defaultTransform =
  (search, searchField = 'name') =>
  (data, headers, field = searchField) => {
    const result = JSON.parse(data)
    if (result.status_code && !http.successful(result.status_code))
      return result

    const byUuid = isUuid(search)
    const byField = !byUuid && typeof search === 'string'
    const byRegex = !byField && !byUuid && search instanceof RegExp
    const byArray = Array.isArray(search)

    if (byField) return result.data.find((item) => item[field] === search)
    if (byRegex) return result.data.filter((item) => search.test(item[field]))
    if (byArray)
      return result.data.filter((item) =>
        search.find((el) => {
          const byUuid = isUuid(el)
          const byField = !byUuid && typeof el === 'string'
          const byRegex = !byField && !byUuid && el instanceof RegExp
          if (byUuid) return el === item.id
          if (byField) return el === item[field]
          if (byRegex) return el.test(item[field])
        }),
      )
    return result.data
  }

const transformResponse = (search, field = 'name') => [
  defaultTransform(search, field),
]

export default transformResponse
