const webpackConfig = require('./webpack.config.karma');

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
        reporters: ['mocha', 'coverage'],
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
