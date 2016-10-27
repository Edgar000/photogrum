module.exports = {
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
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    devtool: 'inline-source-map'
};
