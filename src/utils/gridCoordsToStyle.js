import {
  PX_PER_ROW,
  PX_PER_COL
} from 'utils/constants';

export function gridColsToPx(cols) {
  return `${PX_PER_COL * cols}px`;
};

export function gridRowsToPx(rows) {
  return `${PX_PER_ROW * rows}px`
};

export function gridCoordsToOffsetStyle(row, col) {
  return {
    top: gridRowsToPx(row),
    left: gridColsToPx(col),
  };
};

export function gridCoordsToDimStyle(numCols, numRows) {
  return {
    height: gridRowsToPx(numRows),
    width: gridColsToPx(numCols),
  };
};
