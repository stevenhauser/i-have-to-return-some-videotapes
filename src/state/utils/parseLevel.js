import curry from 'lodash/function/curry';

import { createEntity } from 'state/definitions/entities';
import { createGround } from 'state/definitions/grounds';

const splitter = /\s+\|?\s*/;

const parseLevelGrid = curry((createCell, data) => {
  return data
    .map((r) => r.split(splitter))
    .map((r) => r.map(createCell));
});

export const parseGrounds = parseLevelGrid(createGround);
export const parseEntities = parseLevelGrid(createEntity);
