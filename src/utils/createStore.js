import { createHistory, useBasename } from 'history';

import {
  compose,
  createStore as createReduxStore,
  applyMiddleware
} from 'redux';

import {
  reduxReactRouter,
  routerStateReducer
} from 'redux-router';

import thunk from 'redux-thunk';

import * as appReducer from 'state';

import { initialState } from 'state/initialState';

const createHistoryWithBasename = (historyOptions) => {
  return useBasename(createHistory)({
    basename: BASENAME, // inlined by webpack
    ...historyOptions
  })
};

const routerStateSelector = (state) => state.get('router');

const reducer = (state = initialState, action) => {
  return (
    appReducer.supports(action.type) ?
    appReducer.reduce(state, action) :
    // Assume any non-supported actions deal with routing for now.
    state.set('router', routerStateReducer(routerStateSelector(state), action))
  );
};

export default function createStore() {
  return compose(
    applyMiddleware(thunk),
    reduxReactRouter({ createHistory: createHistoryWithBasename, routerStateSelector })
  )(createReduxStore)(reducer);
};
