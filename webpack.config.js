module.exports  = {
    entry: './index.js',
    output: {
        path: __dirname + '/bundle',
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'ng-annotate'
            }
        ]
    }
};
