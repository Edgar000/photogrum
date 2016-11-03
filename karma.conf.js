const webpackConfig = require('./webpack.config.karma');
const reporters = (process.env.TDD_FLAG == '1') ? ['mocha'] : ['mocha', 'coverage'];

module.exports = (config) => {
    config.set({
        basePath: './',
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'sinon'],
        webpack: webpackConfig,
        files: [
            {pattern: 'node_modules/angular/angular.js', watched: false},
            {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
            {pattern: 'app/**/*.spec.js', watched: false}
        ],
        preprocessors: {'app/**/*.spec.js': ['webpack', 'sourcemap']},
        reporters: reporters,
        coverageReporter: {
            reporters: [{type: 'text-summary'}, {type: 'html'}],
            check: {
                global: {
                    statements: 95,
                    branches: 95,
                    functions: 95,
                    lines: 95
                }
            }
        }
    });
};
