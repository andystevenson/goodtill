import http from './http.js'
import isUuid from './isUuid.js'

const defaultField = (fieldname, isUuid) => {
  if (fieldname) return fieldname
  if (isUuid) return 'id'
  return 'name'
}

const searchByUuid = (result, search) => {
  const searchable = Array.isArray(result.data)
}

export const defaultTransform =
  (search, searchField) =>
  (data, headers, field = searchField) => {
    const result = JSON.parse(data)
    if (result.status_code && !http.successful(result.status_code))
      return result

    const searchable = Array.isArray(result.data)
    if (!searchable) return result.data

    const byUuid = isUuid(search)
    const fieldname = defaultField(field, byUuid)
    if (byUuid) return result.data.find((item) => item[fieldname] === search)

    const byField =
      !byUuid && (typeof search === 'string' || typeof search === 'number')
    if (byField) return result.data.filter((item) => item[fieldname] === search)

    const byRegex = !byField && !byUuid && search instanceof RegExp
    if (byRegex)
      return result.data.filter((item) => search.test(item[fieldname]))

    const byPredicate = typeof search === 'function'
    if (byPredicate) return result.data.filter((item) => search(item))

    const byArray = Array.isArray(search)
    if (byArray)
      return result.data.filter((item) =>
        search.find((el) => {
          const byUuid = isUuid(el)
          if (byUuid) return el === item[fieldname]

          const byField =
            !byUuid && (typeof el === 'string' || typeof el === 'number')
          if (byField) return el === item[fieldname]

          const byRegex = !byField && !byUuid && el instanceof RegExp
          if (byRegex) return el.test(item[fieldname])

          const byPredicate = typeof el === 'function'
          if (byPredicate) return el(item)
        }),
      )
    return result.data
  }

const transformResponse = (search, field = 'name') => {
  const t = defaultTransform(search, field)
  return [t]
}
export default transformResponse
