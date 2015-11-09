import curry from 'lodash/function/curry';
import rearg from 'lodash/function/rearg';

import { coordsToId } from 'state/utils/coordsToId';
import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

const splitter = /\s+\|?\s*/;

const createTile = curry((defs, row, col, def) => {
  return (
    (def in defs) ?
    { ...defs[def], row, col } :
    null
  );
});

export const splitRow = (row) => row.split(splitter);

const parseLevelGrid = curry((defs, data) => {
  return data
    .map(splitRow)
    .reduce((obj, row, rowIdx) => {
      const createItem = rearg(createTile(defs, rowIdx), 1, 0);
      const items = row
        .map(createItem)
        .filter(item => !!item)
        .reduce((itemsObj, item) => {
          itemsObj[coordsToId(item.col, item.row)] = item;
          return itemsObj;
        }, {});
      return {
        ...obj,
        ...items
      };
    }, {});
});

export const parseGrounds = parseLevelGrid(grounds);
export const parseEntities = parseLevelGrid(entities);
