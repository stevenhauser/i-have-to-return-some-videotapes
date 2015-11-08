import { initialState } from 'state/initialState';

export default function die(state) {
  return initialState.set('deaths', state.get('deaths') + 1);
};
