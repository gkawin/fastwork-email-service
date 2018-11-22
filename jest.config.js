const glob = require('glob')
const pkgs = glob.sync('./packages/*').map(p => p.replace(/^\./, '<rootDir>'))

module.exports = {
  notify: true,
  verbose: true,
  roots: pkgs,
  testPathIgnorePatterns: [
    '/dist/',
    '/node_modules/'
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)?$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  preset: 'ts-jest',
  testMatch: null,
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
}
