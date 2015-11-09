import { Map } from 'immutable';

import { typeToState } from 'state/actions/pickTile';

import { coordsToId } from 'state/utils/coordsToId';

import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

const typeToTilesPath = Object.freeze({
  entity: 'entities',
  ground: 'grounds',
});

const typeToDefintion = Object.freeze({
  entity: entities,
  ground: grounds
});

export const type = 'PLACE_TILE';

export function reduce(state, { tileType, col, row }) {
  const id = coordsToId(col, row);
  const tilesPath = typeToTilesPath[tileType];
  const shortType = state.getIn(['editor', typeToState[tileType]]);
  if (!shortType) { return state; }
  const { type } = typeToDefintion[tileType][shortType];
  const keypath = [tilesPath, id];
  return state.setIn(keypath, Map({ col, row, type }));
};

export function toPlaceTile(tileType, col, row) {
  return { type, tileType, col, row };
};
