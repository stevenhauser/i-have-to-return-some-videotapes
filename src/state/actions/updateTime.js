import die from 'state/utils/die';

export const type = 'UPDATE_TIME';

export function reduce(state, action) {
  const newTime = Math.max(0, state.get('time') - 1);
  return (
    newTime === 0 ?
    die(state) :
    state.set('time', newTime)
  );
};

export function toUpdateTime() {
  return { type };
};
