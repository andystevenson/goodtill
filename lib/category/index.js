import read from './read.js'
import categorize from './categorize.js'

export { read, read as all, read as categories, categorize }
export default { categories: read, all: read, read, categorize }
