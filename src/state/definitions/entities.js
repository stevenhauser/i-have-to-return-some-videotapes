import {
  not,
  hasBoots,
  hasHammer,
  hasSilverware,
  hasSpeedboat,
  hasSunglasses,
  returnTrue
} from 'state/definitions/abilities';

const canBlock = returnTrue;
const canCollect = returnTrue;
const canKill = returnTrue;
const canWin = returnTrue;

const blocksUnless = (hasAbility) => ({
  canBlock: not(hasAbility),
  canDie: hasAbility
});

const killsUnless = (hasAbility) => ({
  canKill: not(hasAbility),
  canDie: hasAbility
});

export const entities = {
  // Special
  SA: { type: 'tape', canCollect },
  SB: { type: 'door', canWin },
  SC: { type: 'person' },
  SD: { type: 'invisible', canBlock },
  SE: { type: 'ghost' },
  // Powerups
  PA: { type: 'sunglasses', canCollect },
  PB: { type: 'silverware', canCollect },
  PC: { type: 'speedboat',  canCollect },
  PD: { type: 'boots',      canCollect },
  PE: { type: 'hammer',     canCollect },
  // Bounds
  BA: { type: 'treeA',    canBlock },
  BB: { type: 'treeB',    canBlock },
  BC: { type: 'building', canBlock },
  BD: { type: 'rabbit',   ...blocksUnless(hasHammer) },
  BE: { type: 'chicken',  ...blocksUnless(hasHammer) },
  BF: { type: 'fishA',    ...blocksUnless(hasSpeedboat) },
  BG: { type: 'fishB',    ...blocksUnless(hasSpeedboat) },
  BH: { type: 'turtle',   ...blocksUnless(hasHammer) },
  BI: { type: 'camel',    ...blocksUnless(hasHammer) },
  BJ: { type: 'cloud',    canBlock },
  BK: { type: 'creepsun', ...blocksUnless(hasHammer) },
  // Killers without items
  DA: { type: 'sun',     canKill: not(hasSunglasses) },
  DB: { type: 'corn',    ...blocksUnless(hasSilverware) },
  DC: { type: 'wave',    canBlock: not(hasSpeedboat) },
  DD: { type: 'fire',    ...killsUnless(hasBoots) },
  DE: { type: 'snowman', ...killsUnless(hasHammer) },
  // Killers always
  KA: { type: 'bee',       canKill },
  KB: { type: 'gator',     canKill },
  KC: { type: 'snake',     canKill },
  KD: { type: 'carA',      canKill },
  KE: { type: 'carB',      canKill },
  KF: { type: 'taxi',      canKill },
  KG: { type: 'firetruck', canKill },
  KH: { type: 'police',    canKill },
  KI: { type: 'ambulance', canKill },
};
