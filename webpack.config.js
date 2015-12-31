var path = require('path');
var webpack = require('webpack');

module.exports = (opts={}) => ({
  devtool: opts.devtool,
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
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(opts.env)
  ].concat(!opts.minify ? [] : new webpack.optimize.UglifyJsPlugin({
    global: true,
    mangle: { toplevel: true },
    compress: { unsafe: true, dead_code: true }
  })),
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'autoprefixer', 'sass']
    }]
  }
});
