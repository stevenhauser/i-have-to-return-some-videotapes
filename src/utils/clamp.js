import curry from 'lodash/function/curry';

export default curry((min, max, num) => {
  return Math.max(Math.min(num, max), min);
});
