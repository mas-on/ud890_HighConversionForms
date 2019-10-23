const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  entry: {
    newevent: "./src/js/new-event.js",    
    events: "./src/js/events.js",
    signup: "./src/js/signup.js",
    vendor: ["jquery"]
    //settings: "./src/scripts/settings.js"
  }, 
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
            ]      
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        template: './src/new-event.html',
        chunks: ['vendor', 'newevent'],
        chunksSortMode: 'manual',
        filename: 'new-event.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({    
      hash: true,  
      template: './src/index.html',
      //chunks: ['vendor', 'index'],
      //chunksSortMode: 'manual',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({    
      hash: true,  
      template: './src/events.html',
      chunks: ['vendor', 'events'],
      chunksSortMode: 'manual',
      filename: 'events.html'
    }),
    new HtmlWebpackPlugin({    
      hash: true,  
      template: './src/signup.html',
      chunks: ['vendor', 'signup'],
      chunksSortMode: 'manual',
      filename: 'signup.html'
    })
  ],
  devtool: 'none'
};