const tsConfig = require('./tsconfig.json')

module.exports = (wallaby) => {
  return {
    name: 'Evidnet Server v2',
    files: [
      'server/**/*.ts'
    ],

    tests: [
      'test/**/*Spec.ts'
    ],
    
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(tsConfig)
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