const isCi = typeof process.env.CI !== 'undefined'
if (!isCi) {
  require('husky').install()
}

export {}
