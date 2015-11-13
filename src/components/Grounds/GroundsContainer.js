import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import level from 'state/models/level';

import Tiles from 'components/Tiles/Tiles';

import 'components/Grounds/Ground.scss';

function mapStateToProps(state) {
  return {
    block: 'ground',
    tiles: level.getGrounds(state).toArray().map(immutableToJs)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tiles);
