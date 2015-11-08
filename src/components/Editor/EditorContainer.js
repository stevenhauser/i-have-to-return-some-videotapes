import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import { toPickTile } from 'state/actions/pickTile';

import Editor from 'components/Editor/Editor';

function mapStateToProps(state) {
  const keypath = ['editor'];
  return {
    activeEntity: state.getIn([...keypath, 'activeEntity']),
    activeGround: state.getIn([...keypath, 'activeGround']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPickTile(tileType, shortType) {
      dispatch(toPickTile(tileType, shortType));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
