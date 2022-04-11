import read, { customerGroups, all } from './read.js'

export { read, customerGroups, all }

export default {
  module: 'customerGroups',
  url: '/customerGroups',
  read,
  customerGroups,
  all,
}
