module.exports = {
  bail: false,
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    'fetch',
    '-mock.js'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '.+\\.(js?)$': 'babel-jest',
    '.+\\.(css)$': '<rootDir>/node_modules/jest-css-modules-transform'
  },
  rootDir: './../',
  verbose: true
}
