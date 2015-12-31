import path from 'path';
import webpack from 'webpack';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const tasks = {
  serve() {
    return Promise.resolve().then(() => {
      const compiler = webpack(config);
      const PORT = 3000;

      return new Promise((resolve, reject) => express()
        .use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
        .use(webpackHotMiddleware(compiler))
        .use('/assets', express.static(path.join(__dirname, 'assets')))
        .get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
        .listen(PORT, 'localhost', (err) => {
          if (err) { return reject(err); }
          console.log(`Listening on port ${PORT}`);
          resolve();
        })
      );
    });
  }
};

const argLoop = args => {
  if (!args.length) {
    return;
  }

  let task = args[0];
  if (typeof tasks[task] !== 'function') {
    return console.error('Unknown task: ' + task);
  }

  tasks[task]()
    .then(argLoop.bind(this, args.slice(1)))
    .catch(err => {
      console.error(err.stack);
    });
};

argLoop(process.argv.slice(2));
