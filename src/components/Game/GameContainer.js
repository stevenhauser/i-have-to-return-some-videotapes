import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import {
  CAM_COLS,
  CAM_ROWS
} from 'utils/constants';

import immutableToJs from 'utils/immutableToJs';

import { toChangeLevel } from 'state/actions/changeLevel';

import Game from 'components/Game/Game';

function mapStateToProps(state) {
  return {
    hasWon: state.get('hasWon'),
    numCols: CAM_COLS,
    numRows: CAM_ROWS,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onWillMount() {
      dispatch(toChangeLevel(1));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
