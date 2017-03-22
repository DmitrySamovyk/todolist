const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './js',
    filename: 'main.js'
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react'),
            require.resolve('babel-preset-stage-0'),
          ]
        }
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract( "style", "css!sass")
      },{
        test:  /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'file-loader?name=../fonts/[name].[ext]'
      },{
        test:  /.(png|jpg)(\?[a-z0-9=\.]+)?$/,
        loader: 'file-loader?name=../img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/main.css')
  ],
  watch: true
};
