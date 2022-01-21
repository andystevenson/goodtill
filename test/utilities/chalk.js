import chalk from 'chalk'

const format = (...message) => ` ${message.join(', ')} `

export const error = (...message) => {
  return chalk.bgRed.bold.white(format(...message))
}

export default { error }
