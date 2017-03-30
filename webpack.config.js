
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};
module.exports =

{    name: 'server',
    target: 'node',
    entry: './main.js',
    output: {
        path: '/.',
        filename: 'index.js'
    },
    externals: nodeModules,
    module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   
};