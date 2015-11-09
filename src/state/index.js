import { initialState } from 'state/initialState';

import * as move from 'state/actions/move';
import * as pickTile from 'state/actions/pickTile';
import * as placeTile from 'state/actions/placeTile';
import * as updateTime from 'state/actions/updateTime';

const reducers = {
  [move.type]: move.reduce,
  [pickTile.type]: pickTile.reduce,
  [placeTile.type]: placeTile.reduce,
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
