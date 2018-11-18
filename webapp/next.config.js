const withStylus = require('@zeit/next-stylus')

const enhancer = withStylus

module.exports = enhancer({
  exportPathMap: () => ({
    '/': { page: '/' },
  })
})