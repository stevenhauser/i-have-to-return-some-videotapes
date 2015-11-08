import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import Game from 'components/Game/Game';

function mapStateToProps(state) {
  return {
    hasWon: state.get('hasWon')
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
