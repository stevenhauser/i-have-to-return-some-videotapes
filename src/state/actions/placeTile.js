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

export function reduce(state, { tileType, shortType, col, row }) {
  const id = coordsToId(col, row);
  const tilesPath = typeToTilesPath[tileType];
  const { type } = typeToDefintion[tileType][shortType];
  const keypath = [tilesPath, id, 'type'];
  console.log( 'PLACE_TILE', keypath, type );
  return state.setIn(keypath, type);
};

export function toPlaceTile(tileType, shortType, col, row) {
  return { type, tileType, shortType, col, row };
};
