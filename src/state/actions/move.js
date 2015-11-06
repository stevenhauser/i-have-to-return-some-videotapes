import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

import player from 'state/models/player';
import coordsToId from 'state/utils/coordsToId';

const xOffsets = Object.freeze({
  left:  -1,
  right:  1,
});

const yOffsets = Object.freeze({
  up:   -1,
  down:  1,
});

export const type = 'MOVE';

export function reduce(state, { direction }) {
  const xOffset = xOffsets[direction] || 0;
  const yOffset = yOffsets[direction] || 0;
  const row = player.getRow(state);
  const col = player.getCol(state);
  const newRow = row + yOffset;
  const newCol = col + xOffset;
  const id = coordsToId(newCol, newRow);
  const ground = state.getIn(['grounds', id]);
  const entity = state.getIn(['entities', id]);
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
