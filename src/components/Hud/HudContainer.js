import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import level from 'state/models/level';

import { initialState } from 'state/initialState';

import { toUpdateTime } from 'state/actions/updateTime';

import Hud from 'components/Hud/Hud';

function mapStateToProps(state) {
  return {
    health: state.get('health'),
    healthTotal: initialState.get('health'),
    numDeaths: state.get('deaths'),
    numTapesCollected: state.get('numTapes'),
    numTapesTotal: level.getNumTapesTotal(state),
    powerups: immutableToJs(state.get('powerups')),
    time: state.get('time'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTick() {
      dispatch(toUpdateTime());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hud);
