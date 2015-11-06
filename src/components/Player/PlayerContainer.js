import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import Player from 'components/Player/Player';

function mapStateToProps(state) {
  return {
    col: state.getIn(['player', 'col']),
    row: state.getIn(['player', 'row']),
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
