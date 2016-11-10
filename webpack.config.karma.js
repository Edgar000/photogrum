module.exports = {
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: [['istanbul', {exclude: ['**/*.spec.js']}]]
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
            },
            {
                test: /\.png$/,
                loader: 'file'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'resolve-url', 'sass']
            }
        ]
    },
    devtool: 'inline-source-map'
};
