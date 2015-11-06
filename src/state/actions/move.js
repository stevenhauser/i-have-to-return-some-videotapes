import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

import clamp from 'utils/clamp';

import player from 'state/models/player';
import { coordsToId } from 'state/utils/coordsToId';

const xOffsets = Object.freeze({
  left:  -1,
  right:  1,
});

const yOffsets = Object.freeze({
  up:   -1,
  down:  1,
});

export const type = 'MOVE';

// TODO: `memoize`
const terminalCell = curry((method, prop, collection) => {
  return collection[method]((item) => item.get(prop)).get(prop);
});
const minCol = terminalCell('minBy', 'col');
const maxCol = terminalCell('maxBy', 'col');
const minRow = terminalCell('minBy', 'row');
const maxRow = terminalCell('maxBy', 'row');

const clampToWorld = curry((grounds, col, row) => {
  return [
    clamp(minCol(grounds), maxCol(grounds), col),
    clamp(minRow(grounds), maxRow(grounds), row)
  ];
});

export function reduce(state, { direction }) {
  const xOffset = xOffsets[direction] || 0;
  const yOffset = yOffsets[direction] || 0;
  const row = player.getRow(state);
  const col = player.getCol(state);
  const grounds = state.get('grounds');
  const entities = state.get('entities');
  let [newCol, newRow] = clampToWorld(grounds, col + xOffset, row + yOffset);
  const id = coordsToId(newCol, newRow);
  const occupiers = [
    grounds.get(id),
    entities.get(id)
  ];
  return flow(
    player.setRow(newRow),
    player.setCol(newCol),
    player.setDirection(
      (direction in xOffsets) ?
      direction :
      player.getDirection(state)
    )
  )(state);
};

export function toMove(direction) {
  return { type, direction };
};
