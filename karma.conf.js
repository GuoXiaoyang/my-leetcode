// Karma configuration
// Generated on Tue Mar 14 2017 00:04:09 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','commonjs'],


    // list of files / patterns to load in the browser
    files: [
        'main/**/*.js',
        // 'lib/**/*.js',
        'spec/test/**/*[sS]pec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preproces matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'main/**/*.js':['commonjs','coverage'],
        // 'lib/**/*.js':['commonjs','coverage'],
        'spec/test/**/*[sS]pec.js':['commonjs']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    //add coverage files
    coverageReporter: {
       type : 'html',
        dir : 'coverage/'
    }

  })


}
