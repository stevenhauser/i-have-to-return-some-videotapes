import compact from 'lodash/array/compact';
import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

import clamp from 'utils/clamp';

import player from 'state/models/player';
import grounds from 'state/models/grounds';
import { coordsToId } from 'state/utils/coordsToId';
import resetState from 'state/utils/resetState';

import {
  canBlock,
  canCollect,
  canDestroy,
  canDie,
  canKill,
  canWin
} from 'state/definitions/abilities';

const xOffsets = Object.freeze({
  left:  -1,
  right:  1,
});

const yOffsets = Object.freeze({
  up:   -1,
  down:  1,
});

export const type = 'MOVE';

const { minCol, maxCol, minRow, maxRow } = grounds;
const clampToWorld = curry((state, col, row) => {
  return [
    clamp(minCol(state), maxCol(state), col),
    clamp(minRow(state), maxRow(state), row)
  ];
});

export function reduce(state, { direction }) {

  const dir = direction;
  const newDir = (dir in xOffsets) ? dir : player.getDirection(state);

  const xOffset = xOffsets[dir] || 0;
  const yOffset = yOffsets[dir] || 0;

  const row = player.getRow(state);
  const col = player.getCol(state);

  const [newCol, newRow] = clampToWorld(
    state,
    col + xOffset,
    row + yOffset
  );

  const eKeypath = 'entities';
  const id = coordsToId(newCol, newRow);
  const entity = state.getIn([eKeypath, id]);
  const esOccupado = !!entity;
  const type = esOccupado && entity.get('type');

  const move           = (s) => player.setCoords(newCol, newRow, s);
  const moveBack       = (s) => player.setCoords(col, row, s);
  const orient         = (s) => player.setDirection(newDir, s);
  const win            = (s) => s.set('hasWon', true);
  const removeEntity   = (s) => s.deleteIn([eKeypath, id]);
  const incrementTapes = (s) => s.update('numTapes', (num) => num + 1);
  const addPowerup     = (s) => s.update('powerups', (ps) => ps.push(type));
  const die            = (s) => resetState().set('deaths', s.get('deaths') + 1);
  const ghostify       = (s) => s.setIn([eKeypath, id, 'type'], 'ghost');
  const collect        = (s) => (type === 'tape') ? incrementTapes(s) : addPowerup(s);

  const whenEntity = curry((condition, update, s) => {
    return (esOccupado && condition(s, entity)) ? update(s) : s;
  });

  return flow(
    move,
    orient,
    whenEntity(canWin, win),
    whenEntity(canDestroy, removeEntity),
    whenEntity(canCollect, flow(removeEntity, collect)),
    whenEntity(canDie, ghostify),
    whenEntity(canBlock, moveBack),
    whenEntity(canKill, die)
  )(state);

};

export function toMove(direction) {
  return { type, direction };
};
