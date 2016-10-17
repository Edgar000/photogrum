module.exports  = {
    entry: './app/index.js',
    output: {
        path: __dirname + '/bundle',
        filename: "bundle.js"
    },
    devtool: 'source-map'
};
