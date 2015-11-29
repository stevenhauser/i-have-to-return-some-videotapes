import {
  PX_PER_ROW,
  PX_PER_COL
} from 'utils/constants';

export function gridCoordsToOffsetStyle(row, col) {
  return {
    top: `${PX_PER_ROW * row}px`,
    left: `${PX_PER_COL * col}px`,
  };
};

export function gridCoordsToDimStyle(numCols, numRows) {
  return {
    height: `${PX_PER_ROW * numRows}px`,
    width: `${PX_PER_COL * numCols}px`,
  };
};
