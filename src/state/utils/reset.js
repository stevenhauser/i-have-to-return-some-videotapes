import flow from 'lodash/function/flow';

import { initialState } from 'state/initialState';

import player from 'state/models/player';
import level from 'state/models/level';

export default function die(state) {
  return flow(
    ((s) => s.set('level', state.get('level'))),
    ((s) => s.set('router', state.get('router'))),
    player.setCoords(...level.getPlayerStart(state))
  )(initialState);
};
