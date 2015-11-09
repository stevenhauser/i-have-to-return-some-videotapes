import Immutable from 'immutable';

import values from 'lodash/object/values';

import {
  parseGrounds,
  parseEntities
} from 'state/utils/parseLevel';

import * as level1 from 'state/levels/level-01';

function dataFor(key) {
  return (
    JSON.parse(localStorage.getItem(key)) ||
    level1[key]
  );
}

const entities = parseEntities(dataFor('entities'));
const grounds  = parseGrounds(dataFor('grounds'));

const numTapesTotal = values(entities)
  .map(e => e.type)
  .filter(t => t === 'tape')
  .length;


const editor = {
  activeEntity: null,
  activeGround: null,
};

export const initialState = Immutable.fromJS({
  entities,
  grounds,
  numTapesTotal,
  editor: null,
  numTapes: 0,
  deaths: 0,
  time: 90,
  powerups: [],
  health: 4,
  hasWon: false,
  player: {
    row: 49,
    col: 22,
    direction: 'left'
  }
});
