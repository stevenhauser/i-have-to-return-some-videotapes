import { Map } from 'immutable';

import range from 'lodash/utility/range';

import { typeToState } from 'state/actions/pickTile';

import { coordsToId } from 'state/utils/coordsToId';

import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

import { default as groundsModel } from 'state/models/grounds';

const typeToDataPath = Object.freeze({
  entity: 'entities',
  ground: 'grounds',
});

const typeToDefinition = Object.freeze({
  entity: entities,
  ground: grounds
});

function mapTypeToShortType(def) {
  return Object.keys(def).reduce((map, shortKey) => {
    const { type } = def[shortKey];
    map[type] = shortKey;
    return map;
  }, {});
}

const defToShortTypeMap = new WeakMap();
defToShortTypeMap.set(entities, mapTypeToShortType(entities));
defToShortTypeMap.set(grounds, mapTypeToShortType(grounds));

// Transforms the current "expanded" tile data into compact
// level data by mapping tile types in their respective rows
// and columns into an array on short types understood by the
// level paring code.
const placeholder = '00';
function toLevel(def, data, state) {
  const minCol = groundsModel.minCol(state);
  const maxCol = groundsModel.maxCol(state) + 1; // `range` is exclusive
  const minRow = groundsModel.minRow(state);
  const maxRow = groundsModel.maxRow(state) + 1; // `range` is exclusive
  const rowRange = range(minRow, maxRow);
  const colRange = range(minCol, maxCol);
  const level = rowRange.map((row) => {
    return colRange.map((col) => {
      const id = coordsToId(col, row);
      const tile = data.get(id);
      if (!tile) { return placeholder; }
      const type = tile.get('type');
      const shortType = defToShortTypeMap.get(def)[type];
      return shortType;
    }).join(' ');
  });
  return level;
}

function storeLevel(key, def, data, state) {
  localStorage.setItem(
    key,
    JSON.stringify(toLevel(def, data, state))
  );
}

export const type = 'PLACE_TILE';

export function reduce(state, { tileType, col, row }) {
  const id = coordsToId(col, row);
  const dataPath = typeToDataPath[tileType];
  const definition = typeToDefinition[tileType];
  const shortType = state.getIn(['editor', typeToState[tileType]]);
  if (!shortType) { return state; }
  const { type } = definition[shortType];
  const keypath = [dataPath, id];
  state = state.setIn(keypath, Map({ col, row, type }));
  storeLevel(dataPath, definition, state.get(dataPath), state);
  return state;
};

export function toPlaceTile(tileType, col, row) {
  return { type, tileType, col, row };
};
