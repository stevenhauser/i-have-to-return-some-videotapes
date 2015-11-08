import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';

import immutableToJs from 'utils/immutableToJs';

import App from 'components/App/App';

function mapStateToProps(state) {
  return {
    isEditing: state.get('isEditing')
  };
}

function mapDispatchToProps(dispatch) {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
