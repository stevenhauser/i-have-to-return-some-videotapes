export const type = 'MOVE';

export function reduce(state, action) {
  console.log( 'move', action.direction );
  return state;
};

export function toMove(direction) {
  return { direction };
};
