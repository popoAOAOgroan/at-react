var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var plugins = [
    new HtmlWebpackPlugin({
        title: "react 000",
        template: path.resolve(__dirname, 'templates/index.ejs'),
        inject: 'body'
    })
];

var env = process.env.WEBPACK_ENV;
var outPutFile;

if(env === 'product'){
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outPutFile = 'bundle.min.js';
}else{
    outPutFile = 'bundle.js';
}


var config = {
    entry: [
        './app/index.js'      //入口
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outPutFile
    },
    module: {
        loaders:[
            {
                test: /\.scss/,
                loaders: ['style', 'css', 'sass'],
                include: path.resolve(__dirname, 'app')
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: plugins,
    watch: true
};
module.exports = config;