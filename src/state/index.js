import { initialState } from 'state/initialState';

import * as move from 'state/actions/move';
import * as updateTime from 'state/actions/updateTime';

const reducers = {
  [move.type]: move.reduce,
  [updateTime.type]: updateTime.reduce,
};

const supports = (type) => type in reducers;
const ignores  = (type) => (type.indexOf('@@') === 0);

export function reducer(state = initialState, action) {
  const { type } =  action;
  const reduce = reducers[type] || () => state;
  if ( !(supports(type) || ignores(type)) ) {
    console.warn(`No reducer for ${type}.`);
  }
  return reduce(state, action);
};
