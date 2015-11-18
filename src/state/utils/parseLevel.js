import curry from 'lodash/function/curry';
import rearg from 'lodash/function/rearg';

import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

const splitter = /\s+\|?\s*/;

const createTile = curry((defs, row, col, shortType) => {
  return (
    (shortType in defs) ?
    { ...defs[shortType], row, col, shortType } :
    null
  );
});

const parseLevelGrid = curry((defs, data) => {
  return data
    .map((row) => row.split(splitter))
    .map((row, rowIdx) => {
      const createItem = rearg(createTile(defs, rowIdx), 1, 0);
      return row.map(createItem);
    });
});

export const parseGrounds = parseLevelGrid(grounds);
export const parseEntities = parseLevelGrid(entities);
