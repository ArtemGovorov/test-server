const tsConfig = require('./tsconfig.json')

module.exports = (wallaby) => {
  return {
    name: 'Test Server v2',
    files: [
      'src/**/*.ts'
    ],

    tests: [
      'test/**/*.spec.ts'
    ],
    
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(tsConfig.compilerOptions)
    },
    env: {
      type: 'node',
      runner: 'node'
    },
    debug: true,
    testFramework: 'ava',
    delays: {
      run: 1000
    },
    slowTestThreshold: 500,
    lowCoverageThreshold: 85,
    reportUnhandledPromises: true
  }
}
