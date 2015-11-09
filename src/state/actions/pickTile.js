export const typeToState = Object.freeze({
  entity: 'activeEntity',
  ground: 'activeGround',
});

export const type = 'PICK_TILE';

export function reduce(state, { tileType, shortType }) {
  const keypath = ['editor', typeToState[tileType]];
  return state.setIn(keypath, shortType);
};

export function toPickTile(tileType, shortType) {
  return { type, tileType, shortType };
};
