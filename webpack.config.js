var path = require('path');
var webpack = require('webpack');
var sassTypes = require('node-sass').types;
var twemoji = require('twemoji');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    modulesDirectories: ['node_modules', 'src']
  },
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'autoprefixer', 'sass?config=sassConfig']
    }]
  },
  sassConfig: {
    functions: {
      'twemoji-url': function(emoji) {
        const codePoint = twemoji.convert.toCodePoint(emoji.getValue());
        return sassTypes.String(`url(${twemoji.base}svg/${codePoint}.svg)`);
      }
    }
  }
};
