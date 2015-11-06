import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import Entities from 'components/Entities/Entities';

function mapStateToProps(state) {
  return {
    entities: immutableToJs(state.get('entities'))
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entities);
