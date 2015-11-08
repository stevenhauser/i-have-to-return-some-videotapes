import path from 'path';
import webpack from 'webpack';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config';

const compiler = webpack(config);

const PORT = 3000;

express()
  .use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  .use(webpackHotMiddleware(compiler))
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
  .listen(PORT, 'localhost', (err) => {
    if (err) { console.log(err); }
    console.log(`Listening on port ${PORT}`);
  });
