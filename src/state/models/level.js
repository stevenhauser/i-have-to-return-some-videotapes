import curry from 'lodash/function/curry';

import buildModel from 'state/utils/buildModel';

const keypath = 'level';

const groundsOwnKeypath = 'grounds';
const groundsKeypath = [keypath, groundsOwnKeypath];

const entitiesOwnKeypath = 'entities';
const entitiesKeypath = [keypath, entitiesOwnKeypath];

const grounds = (s) => s.getIn(groundsKeypath);
const entities = (s) => s.getIn(entitiesKeypath);

const tileAt = curry((kp, col, row, state) => {
  return state.getIn([...kp, row, col]);
});

const setTilePropAt = curry((kp, col, row, key, val, state) => {
  return state.setIn([...kp, row, col, key], val);
});

const deleteTileAt = curry((kp, col, row, state) => {
  return state.deleteIn([...kp, row, col]);
});

const api = buildModel(keypath, [
  entitiesOwnKeypath,
  groundsOwnKeypath,
  'numTapesTotal',
  'playerStart',
]);

export default Object.assign(api, {

  groundAt: tileAt(groundsKeypath),
  entityAt: tileAt(entitiesKeypath),

  setGroundPropAt: setTilePropAt(groundsKeypath),
  setEntityPropAt: setTilePropAt(entitiesKeypath),

  deleteGroundAt: deleteTileAt(groundsKeypath),
  deleteEntityAt: deleteTileAt(entitiesKeypath),

  minCol: (s) => 0,
  maxCol: (s) => grounds(s).first().size - 1,
  minRow: (s) => 0,
  maxRow: (s) => grounds(s).size - 1,

  width: (s) => grounds(s).first().size,
  height: (s) => grounds(s).size,

});
