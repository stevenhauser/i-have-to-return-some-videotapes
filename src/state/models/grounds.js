import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

const cacheMap = new WeakMap();

// TODO: If `grounds` was a 2d `List` instead of a
// `Map`, we'd just do `row.size` and `col.size` here.
const terminalCell = curry((method, prop, state) => {
  const grounds = state.get('grounds');
  const key = `${method}-${prop}`;
  const cache = cacheMap.get(grounds) || {};
  const val = (
    (key in cache) ?
    cache[key] :
    grounds[method]((ground) => ground.get(prop)).get(prop)
  );
  cache[key] = val;
  cacheMap.set(grounds, cache);
  return val;
});

const minCol = terminalCell('minBy', 'col');
const maxCol = terminalCell('maxBy', 'col');
const minRow = terminalCell('minBy', 'row');
const maxRow = terminalCell('maxBy', 'row');

const width  = (s) => (maxCol(s) - minCol(s)) + 1
const height = (s) => (maxRow(s) - minRow(s)) + 1

export default Object.freeze({
  minCol,
  maxCol,
  minRow,
  maxRow,
  width,
  height
});
