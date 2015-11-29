import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

import { initialState } from 'state/initialState';

import player from 'state/models/player';
import level from 'state/models/level';

const maintainedKeys = [
  'deaths',
  'level',
  'router',
];

const maintain = curry((oldState, newState) => {
  return maintainedKeys.reduce((s, k) => {
    return s.set(k, oldState.get(k));
  }, newState);
});

export default function reset(state) {
  return flow(
    maintain(state),
    player.setCoords(...level.getPlayerStart(state))
  )(initialState);
};
