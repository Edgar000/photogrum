module.exports = {
    globals: {
        inject: true
    },
    env: {
        browser: true,
        commonjs: true,
        node: true,
        es6: true,
        mocha: true
    },
    extends: [
        'eslint:recommended',
        'angular'
    ],
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        indent: [
            'error',
            4
        ],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'no-unused-vars': ['error', {
            vars: 'all',
            args: 'after-used',
            varsIgnorePattern: 'app'
        }],
        'prefer-const': 'error',
        'no-var': 'error'
    }
};
