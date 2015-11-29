import flow from 'lodash/function/flow';

export default function die(state) {
  return state.set('deaths', state.get('deaths') + 1);
};
