import curry from 'lodash/function/curry';
import flow from 'lodash/function/flow';
import isFunction from 'lodash/lang/isFunction';
import negate from 'lodash/function/negate';

export const returnTrue = () => true;
export const not = negate;

const buildAbility = (prop) => (state, entity) => {
  const fn = entity.get(prop);
  return isFunction(fn) ? fn(state, entity) : false;
};

export const canBlock = buildAbility('canBlock');
export const canCollect = buildAbility('canCollect');
export const canDie = buildAbility('canDie');
export const canDestroy = buildAbility('canDestroy');
export const canKill = buildAbility('canKill');
export const canWin = buildAbility('canWin');

const hasPowerup = curry((powerup, state, entity) => {
  return state.get('powerups').includes(powerup);
});

export const hasBoots = hasPowerup('boots');
export const hasHammer = hasPowerup('hammer');
export const hasSilverware = hasPowerup('silverware');
export const hasSpeedboat = hasPowerup('speedboat');
export const hasSunglasses = hasPowerup('sunglasses');
