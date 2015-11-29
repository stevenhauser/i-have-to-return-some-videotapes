import compact from 'lodash/array/compact';
import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

import clamp from 'utils/clamp';

import level from 'state/models/level';
import player from 'state/models/player';

import die from 'state/utils/die';
import reset from 'state/utils/reset';

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

const { minCol, maxCol, minRow, maxRow } = level;
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

  const entity = level.entityAt(newCol, newRow, state);
  const esOccupado = !!entity;
  const type = esOccupado && entity.get('type');

  const move           = (s) => player.setCoords(newCol, newRow, s);
  const moveBack       = (s) => player.setCoords(col, row, s);
  const orient         = (s) => player.setDirection(newDir, s);
  const win            = (s) => s.set('hasWon', true);
  const removeEntity   = (s) => level.setEntityPropAt(newCol, newRow, 'type', 'empty', s);
  const incrementTapes = (s) => s.update('numTapes', (num) => num + 1);
  const addPowerup     = (s) => s.update('powerups', (ps) => ps.push(type));
  const ghostify       = (s) => level.setEntityPropAt(newCol, newRow, 'type', 'ghost', s);
  const collect        = (s) => (type === 'tape') ? incrementTapes(s) : addPowerup(s);
  const hurt           = (s) => s.update('health', (h) => h - 1);
  const dieIfUnhealthy = (s) => (s.get('health') <= 0) ? flow(die, reset)(s) : s;

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
    whenEntity(canKill, hurt),
    dieIfUnhealthy
  )(state);

};

export function toMove(direction) {
  return { type, direction };
};
