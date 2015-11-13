import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import { toPickTile } from 'state/actions/pickTile';
import { toPlaceTile } from 'state/actions/placeTile';

import level from 'state/models/level';

import Editor from 'components/Editor/Editor';

function mapStateToProps(state) {
  const keypath = ['editor'];
  return {
    activeEntity: state.getIn([...keypath, 'activeEntity']),
    activeGround: state.getIn([...keypath, 'activeGround']),
    minCol: level.minCol(state),
    maxCol: level.maxCol(state),
    minRow: level.minRow(state),
    maxRow: level.maxRow(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPickTile(tileType, shortType) {
      dispatch(toPickTile(...arguments));
    },
    onPlaceTile(tileType, col, row) {
      dispatch(toPlaceTile(...arguments));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
