const isCI = require('is-ci');

let browsers = ['Chrome'];

if (isCI) {
  browsers = ['PhantomJS'];
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'test/*.js'
    ],
    preprocessors: {
      'test/*.js': ['webpack']
    },

    plugins: [
      'karma-webpack',
      'karma-chai',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-threshold-reporter',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      }
    },

    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },

    thresholdReporter: {
      statements: 80,
      branches: 80,
      functions: 100,
      lines: 80
    },

    reporters: ['mocha', 'coverage', 'threshold'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: browsers, // eslint-disable-line babel/object-shorthand
    singleRun: true,
    concurrency: Infinity
  });
};
