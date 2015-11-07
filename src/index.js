import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createStore from 'utils/createStore';

import GameContainer from 'components/Game/GameContainer';

import 'styles/base.scss';
import 'styles/utils.scss';

const store = createStore();

const app = (
  <Provider store={store}>
    <GameContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('game'));
