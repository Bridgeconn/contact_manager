
var config = {
   entry: './main.js',
  
   output: {
      path:'/.',
      filename: 'index.js',
   },
  
   devServer: {
    historyApiFallback: true,
      inline: true,
      port: 8000
   },
    node: {
  fs: "empty",
  tls: "empty",
  net: "empty"
  },
  
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            loader: 'babel-loader',
        
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;