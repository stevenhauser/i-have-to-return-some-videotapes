import Immutable from 'immutable';

import values from 'lodash/object/values';

import {
  parseGrounds,
  parseEntities,
  splitRow
} from 'state/utils/parseLevel';

import * as level1 from 'state/levels/level-01';

function dataFor(key) {
  return (
    JSON.parse(localStorage.getItem(key)) ||
    level1[key]
  );
}

const entitiesData = dataFor('entities');
const groundsData = dataFor('grounds');

const entities = parseEntities(entitiesData);
const grounds  = parseGrounds(groundsData);

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
  time: 5 * 60,
  powerups: [],
  health: 4,
  hasWon: false,
  player: {
    row: groundsData.length - 1,
    col: Math.floor(splitRow(groundsData[0]).length / 2),
    direction: 'left'
  }
});
