import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import { toPickTile } from 'state/actions/pickTile';
import { toPlaceTile } from 'state/actions/placeTile';

import grounds from 'state/models/grounds';

import Editor from 'components/Editor/Editor';

function mapStateToProps(state) {
  const keypath = ['editor'];
  return {
    activeEntity: state.getIn([...keypath, 'activeEntity']),
    activeGround: state.getIn([...keypath, 'activeGround']),
    minCol: grounds.minCol(state),
    maxCol: grounds.maxCol(state),
    minRow: grounds.minRow(state),
    maxRow: grounds.maxRow(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPickTile(tileType, shortType) {
      dispatch(toPickTile(...arguments));
    },
    onPlaceTile(typeType, shortType, col, row) {
      dispatch(toPlaceTile(...arguments));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);