import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createStore from 'utils/createStore';

import { toChangeLevel } from 'state/actions/changeLevel';

import AppContainer from 'components/App/AppContainer';

import 'styles/base.scss';
import 'styles/utils.scss';
import 'styles/navbar.scss';

const store = createStore();
store.dispatch(toChangeLevel(1));

const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
