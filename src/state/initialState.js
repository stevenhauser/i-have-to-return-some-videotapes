import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  editor: {
    activeEntity: null,
    activeGround: null,
  },
  router: null,
  // level: null,
  numTapes: 0,
  deaths: 0,
  time: 5 * 60,
  powerups: [],
  health: 4,
  hasWon: false,
  player: {
    // row: null,
    // col: null,
    direction: 'left'
  }
});
