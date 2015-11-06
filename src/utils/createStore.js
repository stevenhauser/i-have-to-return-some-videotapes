import {
  createStore as createReduxStore,
  applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import { reducer } from 'state';

export default function createStore() {
  return applyMiddleware(thunk)(createReduxStore)(reducer);
};
