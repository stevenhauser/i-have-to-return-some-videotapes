import curry from 'lodash/function/curry';
import capitalize from 'lodash/string/capitalize';
import camelCase from 'lodash/string/camelCase';

import ensureArray from 'utils/ensureArray';

const getProp = curry((keypath, state) => state.getIn(keypath));
const setProp = curry((keypath, value, state) => state.setIn(keypath, value));

export default function buildModel(keypath, props) {
  keypath = ensureArray(keypath);
  return props.reduce((api, prop) => {
    prop = ensureArray(prop);
    const camelized = capitalize(camelCase(prop));
    const propKeypath = [...keypath, ...prop];
    api[`get${camelized}`] = getProp(propKeypath);
    api[`set${camelized}`] = setProp(propKeypath);
    return api;
  }, {});
};
