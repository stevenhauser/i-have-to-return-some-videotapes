import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import Tiles from 'components/Tiles/Tiles';

import 'components/Entities/Entity.scss';

function mapStateToProps(state) {
  return {
    block: 'entity',
    tiles: immutableToJs(state.get('entities'))
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tiles);
