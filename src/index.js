import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createStore from 'utils/createStore';

import AppContainer from 'components/App/AppContainer';

import 'styles/base.scss';
import 'styles/utils.scss';
import 'styles/navbar.scss';

const store = createStore();

// TODO: use `redux-router` here instead of `App.isEditing`.
// Can probably drop `App` altogether after that
const app = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
