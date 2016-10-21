const webpackConfig = require('./webpack.config');

module.exports = (config) => {
    config.set({
        basePath: './',
        browsers: ['Chrome'],
        frameworks: ['mocha', 'chai', 'sinon'],
        webpack: webpackConfig,
        files: [{pattern: 'app/**/*.spec.js', watched: false}],
        preprocessors: {'app/**/*.spec.js': ['webpack', 'sourcemap']}
    });
};
