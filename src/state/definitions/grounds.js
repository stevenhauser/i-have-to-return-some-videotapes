export const grounds = {
  GA: { type: 'grass' },
  GB: { type: 'path' },
  GC: { type: 'water' },
  GD: { type: 'sand' },
  GE: { type: 'forest' },
  GF: { type: 'road' },
  GG: { type: 'sidewalk' },
  GH: { type: 'sky' },
  GI: { type: 'roadline' }
};

export function createGround(shortType) {
  return (
    (shortType in grounds) ?
    { ...grounds[shortType] } :
    grounds.GA
  );
};
