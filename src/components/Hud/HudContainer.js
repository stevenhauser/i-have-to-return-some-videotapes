import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import Hud from 'components/Hud/Hud';

function mapStateToProps(state) {
  return {
    time: state.get('time'),
    numTapesCollected: state.get('numTapes'),
    numTapesTotal: (
      state.get('numTapes') +
      // TODO: `memoize` or something
      (state.get('entities').toList().countBy((e) => e.get('type')).get('tape') || 0)
    ),
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
