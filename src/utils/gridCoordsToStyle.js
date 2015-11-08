import {
  PX_PER_ROW,
  PX_PER_COL
} from 'utils/constants';

export function gridCoordsToStyle(row, col) {
  return {
    top: `${PX_PER_ROW * row}px`,
    left: `${PX_PER_COL * col}px`,
  };
};
