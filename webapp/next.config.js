const withStylus = require('@zeit/next-stylus')

const enhancer = withStylus

module.exports = enhancer({
  exportPathMap: () => ({
    '/': { page: '/campaign' },
    '/campaign': { page: '/campaign' },
    '/activity': { page: '/activity' },
  })
})