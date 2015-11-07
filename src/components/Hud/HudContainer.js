import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import Hud from 'components/Hud/Hud';

function mapStateToProps(state) {
  return {
    time: state.get('time'),
    numTapesCollected: state.get('numTapes'),
    numTapesTotal: state.get('numTapesTotal'),
    powerups: immutableToJs(state.get('powerups'))
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hud);
