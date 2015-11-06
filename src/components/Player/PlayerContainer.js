import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import { toMove } from 'state/actions/move';
import player from 'state/models/player';

import Player from 'components/Player/Player';

function mapStateToProps(state) {
  return {
    col: player.getCol(state),
    row: player.getRow(state),
    direction: player.getDirection(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMove(direction) {
      dispatch(toMove(direction));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
