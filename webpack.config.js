const webpack = require('webpack');
const DEV = process.env.NODE_ENV === 'development';

const config = {
    entry: [
        './client/src/index.js'
    ],
    output: {
        path: `${__dirname}/client/src/`,
        filename: 'bundle.js'
    },
    devtool: DEV ? 'source-map' : false,
    plugins: [],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              "presets": [["es2015", {"modules": false}], "stage-1", "react"]
            },
        }, {
            test: /\.s?css/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/,
        }, {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*$|$)/,
              loader: `file-loader?name=assets/[name]${DEV ? '' : '.[hash]'}.[ext]`
            }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './client/src'
    }
};

if (!DEV) {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.ROOT_URL': JSON.stringify('/api')
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            mangle: false,
            compressor: {
                drop_console: true,
                warnings: false
            }
        })
    );
} else {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.ROOT_URL': JSON.stringify('http://localhost:3000/api')
        })
    );
};

module.exports = config;
