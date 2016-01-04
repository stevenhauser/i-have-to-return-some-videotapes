# I have to return some videotapes

Collect and return your videotapes that are scattered about the woods. Gather powerups along the way to help you on your quest. Don't get killed. Don't run out of time.

Are you ready to return some videotapes? [Why yes, yes I am.][game]

Note that the game works best on OSX due to the emoji font, however [twemoji](https://github.com/twitter/twemoji) adds support for other OSes. Seems to work pretty well cross browser though, but it was tested in Chrome.

## Developing

1. Ensure you have `node@^4.2.1` and `npm@^3.3.9`
1. `npm install`
2. `npm start`
3. GOTO [localhost][localhost]

## About

This is a hackathon game that was created in about 24 (non consecutive) hours, at least for its first version. It's built primarily with [React][react], [Redux][redux], [Immutable][immutable], and [lodash][lodash], simply because I know those tools pretty well and wanted to see how well they'd work for a game. [Babel][babel] and [webpack][webpack] take care of the transpiling and bundling, and [Sass][sass] helps out with the stylesheets. There are [many other great tools][package] I've used here and I couldn't have built this game so rapidly without them. Muchas gracias to all the people who worked on these projects and all the other technologies that made this game possible; it's one of my favorite things I've ever worked on.

[game]:      http://stevenhauser.com/i-have-to-return-some-videotapes
[localhost]: http://localhost:3000
[package]:   https://github.com/stevenhauser/i-have-to-return-some-videotapes/blob/master/package.json
[react]:     https://facebook.github.io/react/
[redux]:     http://redux.js.org/
[immutable]: http://facebook.github.io/immutable-js/
[lodash]:    https://lodash.com/
[babel]:     https://babeljs.io/
[webpack]:   https://webpack.github.io/
[sass]:      http://sass-lang.com/
