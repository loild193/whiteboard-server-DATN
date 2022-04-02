const isProduction = process.env.NODE_ENV === 'production'
const isCi = typeof process.env.CI !== 'undefined'

if (!isCi && !isProduction) {
  require('husky').install()
}
