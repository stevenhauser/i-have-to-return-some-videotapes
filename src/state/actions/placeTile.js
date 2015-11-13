import { Map } from 'immutable';

import range from 'lodash/utility/range';

import { typeToState } from 'state/actions/pickTile';

import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

import level from 'state/models/level';

const typeToEntityPropSetter = Object.freeze({
  entity: 'setEntityPropAt',
  ground: 'setGroundPropAt',
});

const typeToGetter = Object.freeze({
  entity: 'getEntities',
  ground: 'getGrounds',
});

const typeToDefinition = Object.freeze({
  entity: entities,
  ground: grounds
});

const typeToStorageKey = Object.freeze({
  entity: 'entities',
  ground: 'grounds'
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
function toLevel(getter, def, state) {
  const data = level[getter](state).toJS();
  return data.map((row) => (
    row.map((tile) => defToShortTypeMap.get(def)[tile.type]).join(' ')
  ));
}

function storeLevelData(key, getter, def, state) {
  localStorage.setItem(
    key,
    JSON.stringify(toLevel(getter, def, state))
  );
}

export const type = 'PLACE_TILE';

export function reduce(state, { tileType, col, row }) {
  const definition = typeToDefinition[tileType];
  const shortType = state.getIn(['editor', typeToState[tileType]]);
  if (!shortType) { return state; }
  const { type } = definition[shortType];
  const setter = typeToEntityPropSetter[tileType];
  const getter = typeToGetter[tileType];
  const lsKey = typeToStorageKey[tileType];
  state = level[setter](col, row, 'type', type, state);
  // TODO: this should be middleware
  storeLevelData(lsKey, getter, definition, state);
  return state;
};

export function toPlaceTile(tileType, col, row) {
  return { type, tileType, col, row };
};
