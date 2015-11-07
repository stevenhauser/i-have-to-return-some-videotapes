import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';

const cacheMap = new WeakMap();

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

export default Object.freeze({
  minCol: terminalCell('minBy', 'col'),
  maxCol: terminalCell('maxBy', 'col'),
  minRow: terminalCell('minBy', 'row'),
  maxRow: terminalCell('maxBy', 'row'),
});
