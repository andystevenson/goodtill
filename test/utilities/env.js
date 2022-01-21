// set up the environment to run all tests
import { log } from '../../lib/internal/env.js'
import chalk, { error } from './chalk.js'

// by default switch of the messages to STD out
log.setLevel(log.levels.SILENT)

export { chalk, log, error }
export default { chalk, log, error }
