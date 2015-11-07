import Immutable from 'immutable';

import values from 'lodash/object/values';

import {
  parseGrounds,
  parseEntities
} from 'state/utils/parseLevel';

import * as level1 from 'state/levels/level-01';

const entities = parseEntities(level1.entities);
const grounds  = parseGrounds(level1.grounds);
const numTapesTotal = values(entities)
  .map(e => e.type)
  .filter(t => t === 'tape')
  .length;

export const initialState = Immutable.fromJS({
  entities,
  grounds,
  numTapesTotal,
  numTapes: 0,
  deaths: 0,
  time: 120,
  powerups: [],
  hasWon: false,
  player: {
    row: 49,
    col: 22,
    direction: 'left'
  }
});
