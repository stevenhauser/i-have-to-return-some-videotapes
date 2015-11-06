import Immutable from 'immutable';

import {
  parseGrounds,
  parseEntities
} from 'state/utils/parseLevel';

import * as level1 from 'state/levels/level-01';

export const initialState = Immutable.fromJS({
  time: 120,
  player: {
    row: 49,
    col: 22
  },
  tapes: [],
  grounds: parseGrounds(level1.grounds),
  entities: parseEntities(level1.entities),
  powerups: [],
  hasWon: false
});
