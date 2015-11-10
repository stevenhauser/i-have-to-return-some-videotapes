import curry from 'lodash/function/curry';
import rearg from 'lodash/function/rearg';

import { coordsToId } from 'state/utils/coordsToId';
import { entities } from 'state/definitions/entities';
import { grounds } from 'state/definitions/grounds';

const splitter = /\s+\|?\s*/;

const createTile = curry((defs, row, col, def) => {
  return (
    (def in defs) ?
    // TODO: Any reason to actually spread here?
    // We should be able to just have `type` or even
    // `shortType` here. We shouldn't need the ability
    // functions. Those could be looked up from the
    // definition. This probably isn't a big problem
    // though since all the functions are referenced.
    { ...defs[def], row, col } :
    null
  );
});

export const splitRow = (row) => row.split(splitter);

const parseLevelGrid = curry((defs, data) => {
  return data
    .map(splitRow)
    // TODO: this is where it all went wrong.
    // This should result in a 2d array.
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
