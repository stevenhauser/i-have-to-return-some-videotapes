import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

import buildModel from 'state/utils/buildModel';

const api = buildModel('player', [
  'row',
  'col',
  'direction'
]);

api.setCoords = curry((col, row, state) => {
  return flow(api.setCol(col), api.setRow(row))(state);
});

export default api;
