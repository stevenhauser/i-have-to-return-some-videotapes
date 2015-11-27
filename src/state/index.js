import { initialState } from 'state/initialState';

import * as changeLevel from 'state/actions/changeLevel';
import * as move from 'state/actions/move';
import * as pickTile from 'state/actions/pickTile';
import * as placeTile from 'state/actions/placeTile';
import * as updateTime from 'state/actions/updateTime';

const reducers = {
  [changeLevel.type]: changeLevel.reduce,
  [move.type]: move.reduce,
  [pickTile.type]: pickTile.reduce,
  [placeTile.type]: placeTile.reduce,
  [updateTime.type]: updateTime.reduce,
};

export const supports = (type) => type in reducers;
export const ignores  = (type) => (type.indexOf('@@') === 0);

export function reduce(state = initialState, action) {
  const { type } =  action;
  const reducer = reducers[type] || () => state;
  if ( !(supports(type) || ignores(type)) ) {
    console.warn(`No reducer for ${type}.`);
  }
  return reducer(state, action);
};
