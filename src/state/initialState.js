import Immutable from 'immutable';

import values from 'lodash/object/values';

import {
  parseGrounds,
  parseEntities,
  splitRow
} from 'state/utils/parseLevel';

import * as level1 from 'state/levels/level-01';

// TODO: the `localStorage` stuff doesn't belong here.
// TODO: Would be nice to pass level in here to facilitate
// new levels in the future.
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

// TODO: This is really for caching purposes. Is there
// a better way to do this? An immediate `changeLevel`
// action which does the above parsing and then caches
// this value and merges it into state? That seems like
// a great idea as I type this.
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
