import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createStore from 'utils/createStore';

import Game from 'components/Game/Game';

import 'styles/base.scss';

const store = createStore();

const app = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(app, document.getElementById('game'));
