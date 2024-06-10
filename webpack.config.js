const path = require('path');

module.exports = {
    entry: './docs/animations.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    mode: 'development',
};
