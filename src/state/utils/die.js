import flow from 'lodash/function/flow';

import { initialState } from 'state/initialState';

import player from 'state/models/player';
import level from 'state/models/level';

export default function die(state) {
  return flow(
    ((s) => s.set('deaths', state.get('deaths') + 1)),
    ((s) => s.set('level', state.get('level'))),
    player.setCoords(...level.getPlayerStart(state))
  )(initialState);
};
