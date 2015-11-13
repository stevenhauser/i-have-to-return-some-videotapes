import Immutable from 'immutable';

const editor = {
  activeEntity: null,
  activeGround: null,
};

export const initialState = Immutable.fromJS({
  editor: null,
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
